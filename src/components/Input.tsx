import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
  error?: string;
  svg: React.ReactElement;
}

const Input: React.FC<Props> = ({
  touched,
  error,
  id,
  className,
  placeholder,
  svg,
  ...rest
}) => {
  return (
    <div className={"pt-3 pb-6 " + className}>
      {id && placeholder && (
        <label htmlFor={id} className="sr-only">
          {placeholder}
        </label>
      )}
      <div className="flex items-center pb-3 border-b border-gray-200">
        {svg}
        <input
          {...rest}
          className="w-full pl-4 outline-none"
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
