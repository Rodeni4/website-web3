import type { ReactNode } from "react";

import styles from "./app-ui.module.css";

type AppTextProps = {
  children: ReactNode;
  className?: string;
};

export function AppText({ children, className = "" }: AppTextProps) {
  return (
    <p className={`${styles.text} ${className}`.trim()}>{children}</p>
  );
}
