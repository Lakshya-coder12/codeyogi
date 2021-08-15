import React from "react";
import { useAppSelector } from "../../store";
import { meSelector } from "../../selectors/auth.selectors";

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
  const user = useAppSelector(meSelector);
  return (
    <div className="h-screen">
      <div className="mx-10 my-6 bg-gray-100 rounded-lg">
        <div className="p-5 text-2xl font-semibold text-gray-700">
          {`Welcome! ${user!.first_name} ${user!.middle_name} ${
            user!.last_name
          }`}
        </div>
      </div>
    </div>
  );
};

Dashboard.defaultProps = {};

export default React.memo(Dashboard);
