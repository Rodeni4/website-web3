import type { ReactNode } from "react";

import styles from "./app-ui.module.css";

type AppTitleProps = {
  children: ReactNode;
  className?: string;
};

export function AppTitle({ children, className = "" }: AppTitleProps) {
  return (
    <h2 className={`${styles.title} ${className}`.trim()}>{children}</h2>
  );
}
