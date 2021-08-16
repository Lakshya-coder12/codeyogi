import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchOneUser } from "../../actions/users.actions";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import {
  selectedErrorSelector,
  selectedUserSelector,
  selectLoadingSelector,
} from "../../selectors/user.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const UserDetail: React.FC<Props> = (props) => {
  const userID = +useParams<{ userID: string }>().userID;
  const user = useAppSelector(selectedUserSelector);
  const error = useAppSelector(selectedErrorSelector);
  const loading = useAppSelector(selectLoadingSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneUser(userID));
  }, [userID]);

  if (error) {
    return (
      <div className="h-screen">
        <div className="mt-5 text-lg font-semibold text-red-500">{error}</div>
        <div className="flex justify-between w-full max-w-xl mx-auto mt-5">
          <Link to={"/users/" + (userID + 1)}>
            <Button>Next</Button>
          </Link>
          <Link to={"/users/" + (userID - 1)}>
            <Button>Previous</Button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen mx-5 mt-10">
      {loading && (
        <div className="w-full max-w-xl p-4 mx-auto mt-10 border border-gray-300 rounded-md shadow">
          <div className="flex space-x-4 animate-pulse">
            <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
            <div className="flex-1 py-1 space-y-4">
              <div className="w-3/4 h-4 bg-gray-400 rounded"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-400 rounded"></div>
                <div className="w-5/6 h-4 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {user && (
        <div className="w-full max-w-xl p-5 mx-auto mt-4 bg-white rounded-md shadow-md">
          <div className="flex space-x-10">
            <Avatar src={user.profile_pic_url} />
            <div className="flex space-x-1">
              <span>{user.first_name}</span>
              <span>{user.middle_name}</span>
              <span>{user.last_name}</span>
            </div>
          </div>
          <div className="flex mt-4">
            <span className="font-semibold text-gray-700">Role:</span>
          </div>
        </div>
      )}
      <div className="flex justify-between w-full max-w-xl mx-auto mt-5">
        <Link to={"/users/" + (userID + 1)}>
          <Button>Next</Button>
        </Link>
        <Link to={"/users/" + (userID - 1)}>
          <Button>Previous</Button>
        </Link>
      </div>
    </div>
  );
};

UserDetail.defaultProps = {};

export default React.memo(UserDetail);
