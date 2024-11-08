import type {Size} from "./types";

export const getSize = (size: Size) => {
  return {
    sm: "text-md p-2",
    md: "text-lg p-3",
    lg: "text-2xl p-4",
    icon: "p-2",
  }[size];
};

export const getIconSize = (size: Size) => {
  return {
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
    icon: "size-6",
  }[size];
};

export const getVariant = (variant: string) => {
  return {
    primary: "text-foreground-alt bg-primary hover:opacity-90",
    secondary: "text-secondary bg-background-alt hover:opacity-90",
    ghost: "hover:bg-background-alt hover:opacity-80",
    outline: "border border-foreground hover:bg-background-alt hover:opacity-80",
  }[variant];
};

export const getDefaultClass = (className?: string) => {
  return `btn font-bold rounded-default transition ${className}`;
};
