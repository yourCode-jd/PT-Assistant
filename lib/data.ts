export type Muscle = "Chest" | "Back" | "Shoulders" | "Legs" | "Arms" | "Core";
export type Exercise = { id: string; name: string; muscle: Muscle; equipment: string; technique: string; sets: number; reps: string; video?: string };
export const trainer = { name: "Alex Morgan", initials: "AM", role: "Personal trainer" };
export const members = [
  { id: "maya", name: "Maya Patel", initials: "MP", color: "#e9d8ca" },
  { id: "jordan", name: "Jordan Lee", initials: "JL", color: "#d9e5d5" },
  { id: "sam", name: "Sam Rivera", initials: "SR", color: "#e5dbed" },
  { id: "olivia", name: "Olivia Chen", initials: "OC", color: "#f0dfc8" },
  { id: "noah", name: "Noah Williams", initials: "NW", color: "#d7e3e9" },
] as const;
export const exercises: Exercise[] = [
  {id:"chest-press",name:"Dumbbell Bench Press",muscle:"Chest",equipment:"Dumbbells · Bench",technique:"Lie on a bench with feet grounded. Lower the dumbbells beside your chest, then press up without locking your elbows.",sets:3,reps:"10"},
  {id:"push-up",name:"Push-up",muscle:"Chest",equipment:"Bodyweight",technique:"Place hands just outside shoulder width. Keep your body straight as you lower your chest, then press the floor away.",sets:3,reps:"10",video:"https://www.youtube.com/watch?v=WDIpL0pjun0"},
  {id:"incline-press",name:"Incline Dumbbell Press",muscle:"Chest",equipment:"Dumbbells · Bench",technique:"Set a bench to a gentle incline. Lower the weights toward your upper chest, then press upward with control.",sets:3,reps:"10"},
  {id:"chest-fly",name:"Dumbbell Chest Fly",muscle:"Chest",equipment:"Dumbbells · Bench",technique:"With a slight bend in your elbows, open your arms until you feel a comfortable chest stretch, then bring the weights together.",sets:3,reps:"12"},
  {id:"bent-row",name:"Bent-over Dumbbell Row",muscle:"Back",equipment:"Dumbbells",technique:"Hinge at your hips with a neutral back. Pull the weights toward your hips, then lower slowly.",sets:3,reps:"10"},
  {id:"one-arm-row",name:"Single-arm Dumbbell Row",muscle:"Back",equipment:"Dumbbell · Bench",technique:"Support one hand on a bench. Pull the dumbbell toward your hip, keeping your torso steady, then lower with control.",sets:3,reps:"10 / side",video:"https://www.youtube.com/watch?v=ufhQhwyrx-4"},
  {id:"lat-pulldown",name:"Lat Pulldown",muscle:"Back",equipment:"Cable machine",technique:"Sit tall and pull the bar toward your upper chest, driving your elbows down. Return slowly without shrugging.",sets:3,reps:"12"},
  {id:"seated-row",name:"Seated Cable Row",muscle:"Back",equipment:"Cable machine",technique:"Sit tall with arms extended. Pull the handle toward your lower ribs, then return without rounding your back.",sets:3,reps:"12"},
  {id:"shoulder-press",name:"Dumbbell Shoulder Press",muscle:"Shoulders",equipment:"Dumbbells",technique:"Start with dumbbells at shoulder height. Brace your torso and press overhead, then lower under control.",sets:3,reps:"10"},
  {id:"lateral-raise",name:"Lateral Raise",muscle:"Shoulders",equipment:"Dumbbells",technique:"With soft elbows, raise the weights out to your sides to shoulder height. Lower slowly without swinging.",sets:3,reps:"12"},
  {id:"reverse-fly",name:"Bent-over Reverse Fly",muscle:"Shoulders",equipment:"Dumbbells",technique:"Hinge forward with a neutral back. Lift your arms out to the sides with soft elbows, then lower slowly.",sets:3,reps:"12"},
  {id:"front-raise",name:"Dumbbell Front Raise",muscle:"Shoulders",equipment:"Dumbbells",technique:"Raise the weights in front of you to shoulder height without leaning back. Lower with control.",sets:3,reps:"12"},
  {id:"squat",name:"Bodyweight Squat",muscle:"Legs",equipment:"Bodyweight",technique:"Stand with feet about shoulder width. Sit down between your hips, keeping your heels grounded, then stand tall.",sets:3,reps:"12",video:"https://www.youtube.com/watch?v=8060FZiT5TA"},
  {id:"goblet-squat",name:"Goblet Squat",muscle:"Legs",equipment:"Dumbbell",technique:"Hold a dumbbell close to your chest. Bend at the hips and knees, then drive through your feet to stand.",sets:3,reps:"10"},
  {id:"reverse-lunge",name:"Reverse Lunge",muscle:"Legs",equipment:"Bodyweight",technique:"Step one foot back and lower both knees. Push through your front foot to return to standing.",sets:3,reps:"10 / side"},
  {id:"romanian-deadlift",name:"Romanian Deadlift",muscle:"Legs",equipment:"Dumbbells",technique:"With soft knees, push your hips back and lower the weights along your legs. Stand by driving your hips forward.",sets:3,reps:"10"},
  {id:"glute-bridge",name:"Glute Bridge",muscle:"Legs",equipment:"Bodyweight",technique:"Lie on your back with knees bent. Press through your feet to lift your hips, then lower with control.",sets:3,reps:"15"},
  {id:"calf-raise",name:"Standing Calf Raise",muscle:"Legs",equipment:"Bodyweight",technique:"Stand tall and rise onto the balls of your feet. Pause briefly at the top, then lower your heels slowly.",sets:3,reps:"15"},
  {id:"bicep-curl",name:"Dumbbell Biceps Curl",muscle:"Arms",equipment:"Dumbbells",technique:"Keep your elbows close to your sides. Curl the weights toward your shoulders, then lower without swinging.",sets:3,reps:"12"},
  {id:"hammer-curl",name:"Hammer Curl",muscle:"Arms",equipment:"Dumbbells",technique:"With palms facing inward, curl the weights while keeping your upper arms still. Lower slowly.",sets:3,reps:"12"},
  {id:"tricep-extension",name:"Overhead Triceps Extension",muscle:"Arms",equipment:"Dumbbell",technique:"Hold a dumbbell overhead. Bend your elbows to lower it behind your head, then extend your arms.",sets:3,reps:"12"},
  {id:"tricep-pushdown",name:"Cable Triceps Pushdown",muscle:"Arms",equipment:"Cable machine",technique:"Keep your elbows by your sides and press the handle down until your arms straighten. Return with control.",sets:3,reps:"12"},
  {id:"plank",name:"Forearm Plank",muscle:"Core",equipment:"Bodyweight",technique:"Place elbows under shoulders and extend your legs. Brace your midsection and hold a straight line while breathing.",sets:3,reps:"30 sec",video:"https://www.youtube.com/watch?v=HjzrTRYfOtc"},
  {id:"dead-bug",name:"Dead Bug",muscle:"Core",equipment:"Bodyweight",technique:"Lie on your back with arms and knees raised. Slowly extend opposite arm and leg while keeping your lower back steady.",sets:3,reps:"10 / side"},
  {id:"bird-dog",name:"Bird Dog",muscle:"Core",equipment:"Bodyweight",technique:"From hands and knees, reach one arm and the opposite leg long. Keep hips level, then return and switch sides.",sets:3,reps:"10 / side"},
];
export const templates = [
  { id:"push", name:"Push day", subtitle:"Chest, shoulders & triceps", ids:["chest-press","incline-press","shoulder-press","lateral-raise","tricep-pushdown"] },
  { id:"pull", name:"Pull day", subtitle:"Back & biceps", ids:["lat-pulldown","seated-row","one-arm-row","reverse-fly","bicep-curl"] },
  { id:"legs", name:"Leg day", subtitle:"Lower body strength", ids:["goblet-squat","romanian-deadlift","reverse-lunge","glute-bridge","calf-raise"] },
  { id:"full", name:"Full body", subtitle:"A little bit of everything", ids:["goblet-squat","push-up","one-arm-row","shoulder-press","plank"] },
] as const;
