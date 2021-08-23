import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../../actions/users.actions";
import Avatar from "../../components/Avatar/Avatar";
import {
  userSelector,
  usersLoadingSelector,
} from "../../selectors/user.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const Users: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const users = useAppSelector(userSelector);
  const usersLoading = useAppSelector(usersLoadingSelector);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      {usersLoading && (
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
      <div>
        {users.map((u) => (
          <div
            className="w-full max-w-xl p-5 mx-auto mt-4 bg-white rounded-md shadow-md"
            key={u.id}
          >
            <div className="flex space-x-10">
              <Avatar src={u.profile_pic_url} />
              <div className="flex space-x-1">
                <Link to={"/users/" + u.id}>
                  <span>{u.first_name}</span>
                  <span>{u.middle_name}</span>
                  <span>{u.last_name}</span>
                </Link>
              </div>
            </div>
            <div className="flex mt-4">
              <span className="font-semibold text-gray-700">Role:</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Users.defaultProps = {};

export default React.memo(Users);
