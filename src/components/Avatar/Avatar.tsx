import React, { ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  online: boolean;
  src: string;
}

const Avatar: React.FC<Props> = ({ online, src, ...rest }) => {
  const statusClass = online === true ? "bg-green-600" : "bg-gray-400";
  return (
    <button className="relative">
      <img
        {...rest}
        src={src}
        alt="profile"
        className="w-16 h-16 rounded-full"
      />
      <div
        className={
          "absolute bottom-0 w-4 h-4 border-2 border-white rounded-full right-2 " +
          statusClass
        }
      ></div>
    </button>
  );
};

Avatar.defaultProps = {};

export default React.memo(Avatar);
