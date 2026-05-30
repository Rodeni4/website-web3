import type { ReactNode } from "react";

import styles from "./base-container.module.css";

type BaseContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function BaseContainer({ children, className = "" }: BaseContainerProps) {
  return (
    <section className={`${styles.baseContainer} ${className}`}>
      {children}
    </section>
  );
}