import * as React from "react";
import { cn } from "@/lib/utils";
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => <input ref={ref} className={cn("h-10 w-full rounded-lg border border-[#dce3d9] bg-white px-3 text-sm text-ink outline-none placeholder:text-[#9aa69b] focus:border-moss focus:ring-2 focus:ring-[#d8ebc6]", className)} {...props} />);
Input.displayName = "Input";
export { Input };
