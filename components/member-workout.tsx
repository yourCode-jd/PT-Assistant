import { ArrowUpRight, CirclePlay, Dumbbell, Sparkles } from "lucide-react";
import { exercises, members, trainer } from "@/lib/data";
import type { Workout } from "@/lib/workout";
import { Brand } from "./brand";
export function MemberWorkout({ workout, preview = false }: { workout: Workout; preview?: boolean }) {
  const member = members.find((item) => item.id === workout.memberId);
  return <div className={preview ? "bg-[#f8faf6]" : "min-h-screen bg-[#f8faf6]"}>
    <header className="border-b border-[#e7ebe4] bg-white"><div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 sm:px-8"><Brand/><span className="text-xs font-semibold text-[#829083]">{preview ? "MEMBER PREVIEW" : "YOUR WORKOUT"}</span></div></header>
    <main className="mx-auto max-w-4xl px-5 pb-16 pt-9 sm:px-8 sm:pt-12">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#e7f1df] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[.12em] text-[#51734e]"><Sparkles size={13}/> Made for {member?.name}</div>
      <h1 className="text-3xl font-extrabold tracking-[-.05em] sm:text-5xl">{workout.name}</h1>
      <p className="mt-3 text-sm leading-6 text-[#748177]">A little plan for a stronger you. You&apos;ve got this.</p>
      <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#667469]"><span className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e0ead8] text-[10px] text-[#36583e]">{trainer.initials}</span> Prepared by {trainer.name}</span><span className="h-1 w-1 rounded-full bg-[#b9c4b7]"/><span>{workout.exercises.length} exercises</span></div>
      <div className="mb-4 mt-12 flex items-end justify-between"><div><div className="text-[10px] font-bold uppercase tracking-[.16em] text-[#8c9a8d]">Your session</div><h2 className="mt-1 text-xl font-bold">The workout</h2></div><span className="text-xs text-[#8b988c]">In your trainer&apos;s order</span></div>
      <div className="space-y-3">{workout.exercises.map((item, index) => { const exercise = exercises.find((entry) => entry.id === item.id); if (!exercise) return null; return <article key={item.id} className="rounded-2xl border border-[#e5ebe2] bg-white p-5 shadow-[0_4px_16px_rgba(38,60,42,.025)] sm:p-6">
        <div className="flex items-start gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0f5ed] text-xs font-bold text-[#668061]">{String(index + 1).padStart(2,"0")}</span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-start justify-between gap-2"><div><h3 className="text-base font-bold sm:text-lg">{exercise.name}</h3><p className="mt-1 text-xs text-[#8a988c]">{exercise.muscle} <span className="mx-1">·</span> {exercise.equipment}</p></div><div className="rounded-lg bg-[#f3f7f0] px-3 py-2 text-xs font-bold text-[#3c5c42]">{item.sets} sets <span className="mx-1 text-[#adc1a8]">×</span> {item.reps}</div></div>
        <p className="mt-5 text-sm leading-6 text-[#657369]">{exercise.technique}</p>
        {item.note && <div className="mt-4 rounded-xl border-l-2 border-[#a9c99c] bg-[#f6f9f3] px-4 py-3"><p className="text-[10px] font-bold uppercase tracking-[.12em] text-[#77906f]">A note from your trainer</p><p className="mt-1 text-sm leading-6 text-[#53675a]">{item.note}</p></div>}
        <div className="mt-5 border-t border-[#f0f3ee] pt-4">{exercise.video ? <a href={exercise.video} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-[#426c4c] hover:underline"><CirclePlay size={17}/> Watch demonstration <ArrowUpRight size={13}/></a> : <span className="inline-flex items-center gap-2 text-xs text-[#9aa69b]"><CirclePlay size={17}/> Demonstration not available yet</span>}</div>
        </div></div>
      </article>; })}</div>
      <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#9aa79a]"><Dumbbell size={15}/> One rep at a time. You&apos;re doing great.</div>
    </main>
  </div>;
}
