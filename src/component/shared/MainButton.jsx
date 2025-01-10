import clsx from "clsx";
import styles from "./MainButton.css";

export const buttonVariants = {
  MAIN: "main",
  MODAL: "modal",
  OUTLINED: "outlined", 
  DANGER: "danger",
};

export default function Button({
  variant = buttonVariants.MAIN,
  className,
  onClick,
  disabled,
  children,
  type = "button",
  ariaLabel,
  ...props
}) {
  const btnClass = styles[`btn_${variant}`] || styles.btn_main;

  return (
    <button
      onClick={onClick}
      className={clsx(btnClass, className)}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}
