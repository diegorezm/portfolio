export type Size = "sm" | "md" | "lg" | "icon";
export type Variant = "primary" | "secondary" | "ghost" | "outline";

export type DefaultProps = {
  label?: string;
  icon?: string;
  size?: Size;
  variant?: Variant;
  className?: string;
  isResponsive?: boolean;
};

