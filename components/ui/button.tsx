import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-45", { variants: { variant: { default: "bg-ink text-white hover:bg-moss", outline: "border border-[#dce3d9] bg-white text-ink hover:bg-[#f4f7f1]", ghost: "text-[#536157] hover:bg-[#eef3eb]", accent: "bg-[#d8ebc6] text-[#294a34] hover:bg-[#c8e2b1]" }, size: { default: "h-10 px-4", sm: "h-9 px-3", icon: "h-9 w-9" } }, defaultVariants: { variant: "default", size: "default" } });
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => { const Comp = asChild ? Slot : "button"; return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />; });
Button.displayName = "Button";
export { Button };
