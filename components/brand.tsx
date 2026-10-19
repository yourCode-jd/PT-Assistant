import { Activity } from "lucide-react";
export function Brand({ light = false }: { light?: boolean }) {
  return <div className="flex items-center gap-2.5"><span className={`flex h-9 w-9 items-center justify-center rounded-xl ${light ? "bg-[#d4e8be] text-[#274c36]" : "bg-[#274c36] text-[#d4e8be]"}`}><Activity size={20} strokeWidth={2.5}/></span><span className={`font-[Manrope] text-[19px] font-extrabold tracking-[-0.06em] ${light ? "text-white" : "text-ink"}`}>fitflow<span className="text-[#88ae80]">.</span></span></div>;
}
