import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchOneGroup } from "../../actions/groups.action";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import {
  selectedErrorSelector,
  selectedGroupSelector,
  selectLoadingSelector,
} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const GroupDetail: React.FC<Props> = (props) => {
  const groupID = +useParams<{ groupID: string }>().groupID;
  const group = useAppSelector(selectedGroupSelector);
  const error = useAppSelector(selectedErrorSelector);
  const loading = useAppSelector(selectLoadingSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneGroup(groupID));
  }, [groupID]);

  if (error) {
    return (
      <div className="h-screen">
        <div className="mt-5 text-lg font-semibold text-red-500">{error}</div>
        <div className="flex justify-between mx-auto md:w-1/2 lg:w-1/2">
          <Link to={"/groups/" + (groupID + 1)}>
            <Button className="mt-5 md:w-1/2 lg:w-1/2">Next</Button>
          </Link>
          <Link to={"/groups/" + (groupID - 1)}>
            <Button className="mt-5 md:w-3/4 lg:w-3/4">Previous</Button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen mx-5 mt-10">
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
      {group && (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-md shadow-md">
          <div className="px-4 pt-4">
            <div className="flex justify-between text-lg font-semibold text-gray-700">
              <Avatar src={group.group_img_url} />
              {group.name}
            </div>
            <div className="mt-4 text-sm text-gray-500">
              {group.description}
            </div>
            <h3 className="mt-8 font-semibold text-gray-700">Created By</h3>
            <div className="flex justify-between pb-8 mt-4">
              <Avatar src={group.creator && group.creator.profile_pic_url} />
              <div className="text-lg font-semibold text-gray-700">
                {group.creator && group.creator.first_name}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between max-w-2xl mx-auto mt-5">
        <Link to={"/groups/" + (groupID + 1)}>
          <Button>Next</Button>
        </Link>
        <Link to={"/groups/" + (groupID - 1)}>
          <Button>Previous</Button>
        </Link>
      </div>
    </div>
  );
};

GroupDetail.defaultProps = {};

export default React.memo(GroupDetail);
