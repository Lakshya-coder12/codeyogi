import React, { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
  error?: string;
  Icon?: IconType;
}

const Input: React.FC<Props> = ({
  touched,
  error,
  id,
  className,
  placeholder,
  Icon,
  ...rest
}) => {
  return (
    <div className={"pt-2.75 pb-6.25 " + className}>
      {id && placeholder && (
        <label htmlFor={id} className="sr-only">
          {placeholder}
        </label>
      )}
      <div className="flex items-center pb-2.5 border-b border-gray-200 focus-within:border-blue-600">
        {Icon && <Icon className="w-6 h-6 text-blue-600"></Icon>}
        <input
          {...rest}
          className="w-full pl-4 font-semibold placeholder-gray-300 outline-none"
          id={id}
          placeholder={placeholder}
        ></input>
      </div>
      {touched && <div className="text-red-500">{error}</div>}
    </div>
  );
};

Input.defaultProps = {};

export default React.memo(Input);
