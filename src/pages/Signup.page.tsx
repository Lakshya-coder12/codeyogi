import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Signup: React.FC<Props> = (props) => {
  return (
    <div>
      <div>
        This is Signup page. Already have an account?
        <Link to="/login">
          <span className="text-blue-500">Click here to login.</span>
        </Link>
      </div>
    </div>
  );
};

Signup.defaultProps = {};

export default React.memo(Signup);
