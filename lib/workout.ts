import { exercises, members } from "./data";
export type WorkoutExercise = { id: string; sets: number; reps: string; note: string };
export type Workout = { memberId: string; name: string; exercises: WorkoutExercise[] };
export const MAX_EXERCISES = 20;
export const MAX_ENCODED_LENGTH = 6000;
export function makeWorkoutExercise(id: string): WorkoutExercise {
  const exercise = exercises.find((item) => item.id === id);
  if (!exercise) throw new Error("Exercise not found");
  return { id, sets: exercise.sets, reps: exercise.reps, note: "" };
}
export function validateWorkout(workout: Workout): string | null {
  if (!members.some((member) => member.id === workout.memberId)) return "Choose a member for this workout.";
  if (typeof workout.name !== "string" || !workout.name.trim() || workout.name.length > 60) return "Enter a workout name (up to 60 characters).";
  if (!Array.isArray(workout.exercises) || workout.exercises.length < 1 || workout.exercises.length > MAX_EXERCISES) return `Add between 1 and ${MAX_EXERCISES} exercises.`;
  const seen = new Set<string>();
  for (const item of workout.exercises) {
    if (!item || typeof item.id !== "string" || !exercises.some((exercise) => exercise.id === item.id)) return "This workout contains an exercise that is no longer available.";
    if (seen.has(item.id)) return "This workout contains a duplicate exercise.";
    seen.add(item.id);
    if (!Number.isInteger(item.sets) || item.sets < 1 || item.sets > 10) return "Sets must be a whole number between 1 and 10.";
    if (typeof item.reps !== "string" || !item.reps.trim() || item.reps.length > 24) return "Enter reps or a duration (up to 24 characters) for each exercise.";
    if (typeof item.note !== "string" || item.note.length > 160) return "Exercise instructions must be 160 characters or fewer.";
  }
  return null;
}
export function encodeWorkout(workout: Workout): string {
  const error = validateWorkout(workout);
  if (error) throw new Error(error);
  const compact = { v: 1, m: workout.memberId, n: workout.name.trim(), e: workout.exercises.map(({ id, sets, reps, note }) => [id, sets, reps.trim(), note.trim()]) };
  const bytes = new TextEncoder().encode(JSON.stringify(compact));
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  const encoded = btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  if (encoded.length > MAX_ENCODED_LENGTH) throw new Error("This workout is too large to share. Shorten the instructions or remove an exercise.");
  return encoded;
}
export function decodeWorkout(encoded: string | null): { workout?: Workout; error?: string } {
  if (!encoded) return { error: "This link is missing its workout data. Ask your trainer for a new link." };
  if (encoded.length > MAX_ENCODED_LENGTH) return { error: "This workout link is too large to open. Ask your trainer for a shorter link." };
  if (!/^[A-Za-z0-9_-]+$/.test(encoded)) return { error: "This workout link is invalid. Ask your trainer for a new link." };
  try {
    const binary = atob(encoded.replace(/-/g, "+").replace(/_/g, "/"));
    const json = new TextDecoder("utf-8", { fatal: true }).decode(Uint8Array.from(binary, (char) => char.charCodeAt(0)));
    const data: unknown = JSON.parse(json);
    if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error();
    const record = data as Record<string, unknown>;
    if (record.v !== 1 || typeof record.m !== "string" || typeof record.n !== "string" || !Array.isArray(record.e) || record.e.length > MAX_EXERCISES) throw new Error();
    const entries: WorkoutExercise[] = record.e.map((entry: unknown) => {
      if (!Array.isArray(entry) || entry.length !== 4 || typeof entry[0] !== "string" || typeof entry[1] !== "number" || typeof entry[2] !== "string" || typeof entry[3] !== "string") throw new Error();
      return { id: entry[0], sets: entry[1], reps: entry[2], note: entry[3] };
    });
    const workout = { memberId: record.m, name: record.n, exercises: entries };
    const error = validateWorkout(workout);
    if (error) return { error: `${error} Ask your trainer for a new link.` };
    return { workout };
  } catch { return { error: "This workout link is invalid or incomplete. Ask your trainer for a new link." }; }
}
