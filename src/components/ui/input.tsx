import type { InputHTMLAttributes } from "preact/compat";
import { cn } from "../../lib/cn";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  inputSize?: "sm" | "md" | "lg";
};

export function Input({ inputSize = "md", className, ...props }: Props) {
  return (
    <input
      className={cn(
        "border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200",
        inputSize === "sm" && "px-2 py-1 text-xs",
        inputSize === "md" && "px-3 py-2 text-sm",
        inputSize === "lg" && "px-4 py-3 text-base",
        "border-foreground",
        "bg-surface",
        "text-foreground",
        className,
      )}
      {...props}
    />
  );
}
