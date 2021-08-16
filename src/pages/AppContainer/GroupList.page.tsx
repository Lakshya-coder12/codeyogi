import React from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { queryChangedAction } from "../../actions/groups.action";
import GroupListItem from "../../components/GroupListItem";
import Input from "../../components/Input/Input";
import {
  groupsLoadingSelector,
  groupQuerySelector,
  groupSelector,
} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const GroupList: React.FC<Props> = (props) => {
  const query = useAppSelector(groupQuerySelector);
  const loading = useAppSelector(groupsLoadingSelector);
  const groups = useAppSelector(groupSelector);
  const dispatch = useDispatch();
  return (
    <div className="px-5">
      <div className="flex items-center max-w-2xl p-2 mx-auto mt-5 mb-6 bg-white border border-gray-600 rounded-md">
        <FiSearch className="w-6 h-6 text-blue-600" />
        <Input
          className="w-full pl-4 placeholder-gray-300 focus:outline-none"
          placeholder="Type Group Name"
          value={query}
          onChange={(e) => {
            dispatch(queryChangedAction(e.target.value));
          }}
        />
      </div>
      {loading && (
        <div className="w-full max-w-2xl p-4 mx-auto mt-10 mb-2 border border-gray-300 rounded-md shadow">
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
      {groups &&
        groups.map((group, index) => (
          <GroupListItem
            imgURL={group.group_img_url}
            groupTitle={group.name}
            key={index}
            id={group.id}
          />
        ))}
    </div>
  );
};

GroupList.defaultProps = {};

export default React.memo(GroupList);
