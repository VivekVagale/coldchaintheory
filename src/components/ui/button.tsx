import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const glassBase =
  "relative isolate overflow-hidden backdrop-blur-md backdrop-saturate-150 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-b before:from-white/20 before:via-white/0 before:to-transparent after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.4),inset_0_-1px_1px_0_rgba(255,255,255,0.05)]";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: `${glassBase} border border-white/25 bg-white/10 text-foreground shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] hover:bg-white/[0.16] hover:border-white/30 active:bg-white/20`,
        destructive: `${glassBase} border border-destructive/40 bg-destructive/25 text-foreground shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] hover:bg-destructive/35 hover:border-destructive/50 active:bg-destructive/45`,
        outline: `${glassBase} border border-white/15 bg-white/5 text-foreground shadow-[0_4px_16px_-6px_rgba(0,0,0,0.4)] hover:bg-white/10 hover:border-white/25`,
        secondary: `${glassBase} border border-white/12 bg-white/[0.08] text-foreground shadow-[0_4px_16px_-6px_rgba(0,0,0,0.4)] hover:bg-white/[0.13] hover:border-white/20`,
        ghost:
          "border border-transparent text-foreground hover:border-white/15 hover:bg-white/10 hover:backdrop-blur-md",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
