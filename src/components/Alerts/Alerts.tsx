import React from "react";
import { FiX } from "react-icons/fi";

interface Props {
  theme?: "primary" | "warning" | "success" | "info" | "error";
  children: string;
}

const Alerts: React.FC<Props> = ({ theme, children }) => {
  let themeClass = "";
  let svgHover = "";
  if (theme === "primary") {
    themeClass = "bg-indigo-100 text-indigo-600";
    svgHover = "text-indigo-300";
  } else if (theme === "warning") {
    themeClass = "bg-yellow-100 + text-yellow-600";
    svgHover = "text-yellow-300";
  } else if (theme === "success") {
    themeClass = "bg-green-100 + text-green-600";
    svgHover = "text-green-300";
  } else if (theme === "info") {
    themeClass = "bg-blue-100 + text-blue-600";
    svgHover = "text-blue-300";
  } else {
    themeClass = "bg-red-100 + text-red-600";
    svgHover = "text-red-300";
  }
  return (
    <div className="mx-8">
      <div
        className={
          "flex items-center px-4 py-4 w-full lg:w-3/4 lg:mx-auto rounded-md " +
          themeClass
        }
      >
        <span>{children}</span>
        <button className="block ml-auto">
          <FiX className={"w-5 h-5 hover:" + svgHover} />
        </button>
      </div>
    </div>
  );
};

Alerts.defaultProps = {
  theme: "primary",
};

export default React.memo(Alerts);
