import React, { ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  online?: boolean;
  requireStatus?: boolean;
  rounded?: boolean;
  src: string;
  imgSize?: "small" | "medium" | "large";
}

const Avatar: React.FC<Props> = ({
  online,
  src,
  className,
  requireStatus,
  imgSize,
  rounded,
  ...rest
}) => {
  const imgShape = rounded ? "rounded-full " : "rounded-md ";
  const statusClass = online === true ? "bg-green-600" : "bg-gray-400";
  let statusSizeClass = "";
  if (requireStatus) {
    if (imgSize === "small") {
      statusSizeClass = "w-2 h-2 right-1 ";
    } else if (imgSize === "medium") {
      statusSizeClass = "w-3 h-3 right-3 ";
    } else {
      statusSizeClass = "w-4 h-4 right-4 ";
    }
  }
  let imgSizeClass = "";
  if (imgSize === "small") {
    imgSizeClass = "w-8 h-8";
  } else if (imgSize === "medium") {
    imgSizeClass = "w-16 h-16";
  } else {
    imgSizeClass = "w-28 h-28";
  }
  return (
    <button className={"relative " + className}>
      <img
        {...rest}
        src={src}
        alt="profile"
        className={
          "object-cover border-2 border-white " + imgShape + imgSizeClass
        }
      />
      {requireStatus && (
        <div
          className={
            "absolute bottom-0 border-2 border-white rounded-full " +
            statusSizeClass +
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
  imgSize: "medium",
  className: "",
  rounded: true,
};

export default React.memo(Avatar);
