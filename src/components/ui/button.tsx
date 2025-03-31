import type { ButtonHTMLAttributes } from "preact/compat";
import { cn } from "../../lib/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({
  size = "md",
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center w-full justify-center rounded-lg hover:cursor-pointer transition-colors duration-200",
        variant === "primary" &&
          "bg-primary text-on-primary hover:bg-primary/90",
        variant === "secondary" &&
          "bg-secondary text-on-secondary hover:bg-secondary/90",
        variant === "tertiary" &&
          "bg-tertiary text-on-tertiary hover:bg-tertiary/90",
        variant === "outline" &&
          "border border-primary text-foreground hover:bg-primary hover:text-on-primary",
        variant === "ghost" && "text-foreground hover:bg-foreground/10",

        size === "sm" && "px-3 py-1 text-xs",
        size === "md" && "px-4 py-2 text-sm",
        size === "lg" && "px-6 py-3 text-base",

        className,
      )}
      {...props}
    />
  );
}
