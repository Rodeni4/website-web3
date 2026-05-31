import type { ReactNode } from "react";

import styles from "./app-ui.module.css";

type AppLabelProps = {
  children: ReactNode;
  className?: string;
};

export function AppLabel({ children, className = "" }: AppLabelProps) {
  return (
    <p className={`${styles.label} ${className}`.trim()}>{children}</p>
  );
}
