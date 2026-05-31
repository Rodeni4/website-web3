import type { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./app-ui.module.css";

type AppButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function AppButton({
  children,
  className = "",
  type = "button",
  ...props
}: AppButtonProps) {
  return (
    <button type={type} className={`${styles.button} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
