import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  radius?: string;
  onClickHandler?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  bgColor = "",
  textColor = "",
  radius = "",
  onClickHandler,
  className = "",
  disabled,
  ...props
}) => {
  return (
    <button
      onClick={onClickHandler}
      className={clsx(
        className,
        bgColor,
        textColor,
        radius,
        disabled && "cursor-not-allowed opacity-50",
        !disabled && "cursor-pointer hover:grayscale-20 active:opacity-80",
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
