import React from "react";

interface Props {
  progress: number;
  theme?: "blue" | "red" | "green" | "black" | "yellow";
}

const ProgressBar: React.FC<Props> = ({ progress, theme }) => {
  let themeClass = "";
  if (progress > 100) {
    progress = 100;
  }
  console.log(theme);
  if (theme === "blue") {
    themeClass = "bg-blue-600";
  } else if (theme === "red") {
    themeClass = "bg-red-600";
  } else if (theme === "green") {
    themeClass = "bg-green-600";
  } else if (theme === "black") {
    themeClass = "bg-black";
  } else if (theme === "yellow") {
    themeClass = "bg-yellow-600";
  }
  console.log(themeClass);
  return (
    <div className="mx-4">
      <div className="w-full h-4 bg-gray-200 rounded-full">
        <div
          className={"h-full rounded-full " + themeClass}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

ProgressBar.defaultProps = {
  theme: "blue",
};

export default React.memo(ProgressBar);
