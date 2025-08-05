import type { HTMLAttributes } from "react";

export function Card({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`shadow-md rounded-sm p-6 bg-white ${className ?? ""}`} {...rest}>
      {children}
    </div>
  );
}
