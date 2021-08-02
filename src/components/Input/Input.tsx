import React, { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
  error?: string;
  Icon?: IconType;
  borderStyle?: "open" | "closed";
}

const Input: React.FC<Props> = ({
  touched,
  error,
  id,
  className,
  placeholder,
  borderStyle,
  Icon,
  ...rest
}) => {
  const borderClass =
    borderStyle === "open"
      ? "border-b border-gray-200"
      : "border border-gray-400 rounded-sm";
  return (
    <div className={"pt-2.75 pb-6.25 " + className}>
      {id && placeholder && (
        <label htmlFor={id} className="sr-only">
          {placeholder}
        </label>
      )}
      <div className="relative">
        <div
          className={
            "flex items-center pb-2.5 focus-within:border-blue-600 " +
            borderClass
          }
        >
          {Icon && <Icon className="w-6 h-6 text-blue-600"></Icon>}
          <input
            {...rest}
            className="w-full pl-4 font-semibold placeholder-gray-300 outline-none"
            id={id}
            placeholder={placeholder}
          ></input>
        </div>
        {touched && (
          <div className="absolute left-0 text-red-500 top-8">{error}</div>
        )}
      </div>
    </div>
  );
};

Input.defaultProps = {
  borderStyle: "open",
};

export default React.memo(Input);
