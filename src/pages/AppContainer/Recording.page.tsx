import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Recording: React.FC<Props> = (props) => {
  return (
    <div>
      This is Recordings Page.
      <Link to="/dashboard">
        <span className="text-blue-500">Go to Dashboard</span>
      </Link>
    </div>
  );
};

Recording.defaultProps = {};

export default React.memo(Recording);
