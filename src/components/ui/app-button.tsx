import type { ButtonHTMLAttributes } from "react";
import styles from "./app-ui.module.css";

type AppButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function AppButton({ className = "", type = "button", ...props }: AppButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`${styles.button} ${className}`.trim()}
    />
  );
}