import React from "react";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "success" | "dark";
  outline?: boolean;
  children: string;
}

const Button: React.FC<Props> = ({
  theme,
  outline,
  className,
  children,
  ...rest
}) => {
  let themeClass = "";
  if (outline === true) {
    if (theme === "primary") {
      themeClass =
        "border border-blue-600 bg-white text-blue-600 hover:bg-blue-600 hover:text-white";
    } else if (theme === "success") {
      themeClass =
        "border border-green-400 bg-white text-green-400 hover:bg-green-400 hover:text-white";
    } else {
      themeClass =
        "border border-gray-700 bg-white text-gray-700 hover:bg-gray-700 hover:text-white";
    }
  } else {
    if (theme === "primary") {
      themeClass =
        "border border-blue-600 bg-blue-600 text-white shadow-lg hover:shadow-none";
    } else if (theme === "success") {
      themeClass =
        "border border-green-400 bg-green-400 text-white shadow-lg hover:shadow-none";
    } else {
      themeClass =
        "border border-gray-700 bg-gray-700 text-white shadow-lg hover:shadow-none";
    }
  }
  return (
    <div className={className}>
      <button
        {...rest}
        className={"px-5 py-2 text-sm rounded-md " + themeClass}
      >
        {children}
      </button>
    </div>
  );
};

Button.defaultProps = {
  theme: "primary",
  outline: false,
};

export default React.memo(Button);
