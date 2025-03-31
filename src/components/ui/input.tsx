import type {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "preact/compat";
import { cn } from "../../lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputSize?: "sm" | "md" | "lg";
};

function getSize(inputSize: "sm" | "md" | "lg") {
  switch (inputSize) {
    case "sm":
      return "px-2 py-1 text-xs";
    case "md":
      return "px-3 py-2 text-sm";
    case "lg":
      return "px-4 py-3 text-base";
  }
}

export function Input({ inputSize = "md", className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200 w-full",
        getSize(inputSize),
        "border-foreground",
        "bg-surface",
        "text-foreground",
        className,
      )}
      {...props}
    />
  );
}

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  inputSize?: "sm" | "md" | "lg";
};

export function TextArea({
  inputSize = "md",
  className,
  ...props
}: TextAreaProps) {
  return (
    <textarea
      className={cn(
        "border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200 w-full",
        getSize(inputSize),
        "border-foreground",
        "bg-surface",
        "text-foreground",
        className,
      )}
      {...props}
    />
  );
}
