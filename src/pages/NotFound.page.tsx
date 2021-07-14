import React from "react";

interface Props {}

const NotFound: React.FC<Props> = (props) => {
  return (
    <div className="bg-green-400 h-screen w-screen">
      Sorry, the page you are looking for does not exist.
    </div>
  );
};

NotFound.defaultProps = {};

export default React.memo(NotFound);
