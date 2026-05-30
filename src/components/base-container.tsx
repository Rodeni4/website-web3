import type { ReactNode } from "react";

import styles from "./base-container.module.css";

type BaseContainerProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "clear";
};

export function BaseContainer({
  children,
  className = "",
  variant = "default",
}: BaseContainerProps) {
  return (
    <section
      className={`${styles.baseContainer} ${
        variant === "clear" ? styles.baseContainerClear : ""
      } ${className}`.trim()}
    >
      {children}
    </section>
  );
}