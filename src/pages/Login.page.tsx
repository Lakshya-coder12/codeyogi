import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Login: React.FC<Props> = (props) => {
  return (
    <div>
      <div>
        This is Login page. Don't have an account.
        <Link to="/signup">
          <span className="text-blue-500">Click Here.</span>
        </Link>
        <Link to="/dashboard">
          <span className="text-blue-500">Go to Dashboard.</span>
        </Link>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default React.memo(Login);
