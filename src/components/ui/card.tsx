import { type ReactNode } from "preact/compat";
import { cn } from "../../lib/cn";

type CardProps = {
  variant?: "primary" | "secondary" | "tertiary" | "outline" | "ghost";
  children?: ReactNode;
};

export function CardRoot({ variant = "primary", children }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg p-4",
        variant === "primary" && "bg-primary text-on-primary",
        variant === "secondary" && "bg-secondary text-on-secondary",
        variant === "tertiary" && "bg-tertiary text-on-tertiary",
        variant === "outline" && "border border-foreground text-foreground",
        variant === "ghost" && "text-foreground",
      )}
    >
      {children}
    </div>
  );
}

type CardHeaderProps = {
  title: string;
  image?: {
    url: string;
    alt: string;
    className: string;
  };
  description?: string;
};

export function CardHeader({ title, image, description }: CardHeaderProps) {
  return (
    <div className="mb-2 space-y-2">
      <h1 className="text-lg font-semibold">{title}</h1>
      {image && (
        <img src={image.url} alt={image.alt} className={image.className} />
      )}
      {description && <p className="text-sm">{description}</p>}
    </div>
  );
}

type CardBodyProps = {
  children?: ReactNode;
  className?: String;
};

export function CardBody({ children, className }: CardBodyProps) {
  return <div className={cn("text-sm", className)}>{children}</div>;
}
