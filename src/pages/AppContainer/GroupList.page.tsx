import React, { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  GROUPS_QUERY,
  GROUPS_QUERY_COMPLETED,
} from "../../actions/groups.action";
import { fetchGroups } from "../../api/groups";
import GroupListItem from "../../components/GroupListItem";
import {
  groupQuerySelector,
  groupSelector,
} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const GroupList: React.FC<Props> = (props) => {
  const query = useAppSelector(groupQuerySelector);
  const groups = useAppSelector(groupSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchGroups({ status: "all-groups", query }).then((groups) => {
      dispatch({
        type: GROUPS_QUERY_COMPLETED,
        payload: { groups: groups, query },
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return (
    <div className="flex items-center px-10 mt-5 space-x-10">
      <div className="flex-1">
        <div className="flex items-center p-2 mb-6 bg-white border border-gray-600 rounded-md">
          <FiSearch className="w-6 h-6 text-blue-600" />
          <input
            className="w-full pl-4 placeholder-gray-300 focus:outline-none"
            placeholder="Type Group Name"
            onChange={(e) => {
              dispatch({ type: GROUPS_QUERY, payload: e.target.value });
            }}
          />
        </div>
        {groups &&
          groups.map((element, index) => (
            <GroupListItem
              imgURL={element.group_img_url}
              groupTitle={element.name}
              key={index}
            />
          ))}
      </div>
      {/* <div className="flex-1">
          <div className="flex space-x-6">
            <div className="flex items-center p-2 mb-6 bg-white border border-gray-600 rounded-md">
              <FiSearch className="w-6 h-6 text-blue-600" />
              <input
                className="w-full pl-4 placeholder-gray-300 focus:outline-none"
                placeholder="Type Group Name"
                onChange={(e) => {
                  dispatch({ type: GROUPS_QUERY, payload: e.target.value });
                }}
              />
            </div>
            <Button>Find</Button>
          </div>
          {groups &&
            groups.map((element, index) => (
              <GroupListItem
                imgURL={element.group_img_url}
                groupTitle={element.name}
                key={index}
              />
            ))}
        </div> */}
    </div>
  );
};

GroupList.defaultProps = {};

export default React.memo(GroupList);
