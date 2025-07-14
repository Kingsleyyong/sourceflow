import React from "react";
import clsx from "clsx";

type ButtonProps = {
  text: string;
  bgColor?: string;
  textColor?: string;
  radius?: string;
  onClickHandler?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  bgColor = "",
  textColor = "",
  radius = "",
  onClickHandler,
  className = "",
}) => {
  return (
    <button
      onClick={onClickHandler}
      className={clsx(
        "px-5 py-3 font-semibold transition-colors duration-200",
        bgColor,
        textColor,
        radius,
        className,
      )}
    >
      {text}
    </button>
  );
};

export default Button;
