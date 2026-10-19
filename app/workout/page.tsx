"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { decodeWorkout } from "@/lib/workout";
import { MemberWorkout } from "@/components/member-workout";
import { Brand } from "@/components/brand";
function WorkoutContent() {
  const params = useSearchParams();
  const { workout, error } = decodeWorkout(params.get("w"));
  if (error || !workout) return <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center"><Brand/><div className="mt-12 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9f1e4] text-[#5c7c5d]"><AlertCircle/></div><h1 className="mt-5 text-2xl font-bold">We couldn&apos;t open this workout</h1><p className="mt-3 max-w-sm text-sm leading-6 text-[#78867a]">{error}</p><Link href="/" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#426c4c]"><ArrowLeft size={16}/> Back to FitFlow</Link></main>;
  return <MemberWorkout workout={workout}/>;
}
export default function WorkoutPage() { return <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-sm text-[#78867a]">Loading your workout…</div>}><WorkoutContent/></Suspense>; }
