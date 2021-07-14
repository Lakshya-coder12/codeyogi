import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
  return (
    <div>
      This is Dashboard page.
      <Link to="/recordings">
        <span className="text-blue-500">Go to recordings</span>
      </Link>
    </div>
  );
};

Dashboard.defaultProps = {};

export default React.memo(Dashboard);
