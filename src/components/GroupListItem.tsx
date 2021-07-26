import React from "react";
import Avatar from "./Avatar/Avatar";

interface Props {
  imgURL: string;
  groupTitle: string;
}

const GroupListItem: React.FC<Props> = ({ imgURL, groupTitle }) => {
  return (
    <div className="flex items-center px-4 py-4 mb-2 bg-white border border-gray-300 rounded-lg space-x-14 hover:bg-gray-300">
      <Avatar src={imgURL} />
      <div className="font-semibold text-gray-700">{groupTitle}</div>
    </div>
  );
};

GroupListItem.defaultProps = {};

export default React.memo(GroupListItem);
