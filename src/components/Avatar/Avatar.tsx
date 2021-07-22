import React, { ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  online?: boolean;
  requireStatus?: boolean;
  src: string;
}

const Avatar: React.FC<Props> = ({
  online,
  src,
  className,
  requireStatus,
  ...rest
}) => {
  const statusClass = online === true ? "bg-green-600" : "bg-gray-400";
  return (
    <button className={"relative " + className}>
      <img
        {...rest}
        src={src}
        alt="profile"
        className="object-cover w-16 h-16 border-2 border-white rounded-full "
      />
      {requireStatus && (
        <div
          className={
            "absolute bottom-0 w-4 h-4 border-2 border-white rounded-full right-2 " +
            statusClass
          }
        ></div>
      )}
    </button>
  );
};

Avatar.defaultProps = {
  online: false,
  requireStatus: false,
};

export default React.memo(Avatar);
