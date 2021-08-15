import React from "react";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOneGroup } from "../../actions/groups.action";
import Avatar from "../../components/Avatar/Avatar";
import { groupByIDSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const GroupDetail: React.FC<Props> = (props) => {
  const groupID = +useParams<{ groupID: string }>().groupID;
  const groupByIDs = useAppSelector(groupByIDSelector);
  const group = groupByIDs[groupID];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneGroup(groupID));
  }, [groupID]);
  if (!group) {
    return <FaSpinner className="w-5 h-5 ml-12 animate-spin" />;
  }
  return (
    <div className="h-screen mx-5 mt-10">
      <div className="w-full mx-auto bg-white rounded-md shadow-md md:w-1/2 lg:w-1/2">
        <div className="px-4 pt-4">
          <div className="flex justify-between text-lg font-semibold text-gray-700">
            <Avatar src={group.group_img_url} />
            {group.name}
          </div>
          <div className="mt-4 text-sm text-gray-500">{group.description}</div>
          <h3 className="mt-8 font-semibold text-gray-700">Created By</h3>
          <div className="flex justify-between pb-8 mt-4">
            <Avatar src={group.creator.profile_pic_url} />
            <div className="text-lg font-semibold text-gray-700">
              {group.creator.first_name}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupDetail.defaultProps = {};

export default React.memo(GroupDetail);
