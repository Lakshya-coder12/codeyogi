import React from "react";
import { FiX } from "react-icons/fi";

interface Props {
  theme?: "primary" | "warning" | "success" | "info" | "error";
  children: string;
}

const Alerts: React.FC<Props> = ({ theme, children }) => {
  let themeClass = "";
  if (theme === "primary") {
    themeClass = "bg-indigo-100 text-indigo-600";
  } else if (theme === "warning") {
    themeClass = "bg-yellow-100 + text-yellow-600";
  } else if (theme === "success") {
    themeClass = "bg-green-100 + text-green-600";
  } else if (theme === "info") {
    themeClass = "bg-blue-100 + text-blue-600";
  } else {
    themeClass = "bg-red-100 + text-red-600";
  }
  return (
    <div className="mx-8">
      <div>
        <div
          className={
            "flex items-center px-4 py-4 w-full lg:w-3/4 lg:mx-auto rounded-md " +
            themeClass
          }
        >
          <span>{children}</span>
          <button className="block ml-auto">
            <FiX className="w-5 h-5 " />
          </button>
        </div>
      </div>
    </div>
  );
};

Alerts.defaultProps = {
  theme: "primary",
};

export default React.memo(Alerts);
