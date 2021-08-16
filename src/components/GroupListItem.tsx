import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar/Avatar";

interface Props {
  imgURL: string;
  groupTitle: string;
  id: number;
}

const GroupListItem: React.FC<Props> = ({ imgURL, groupTitle, id }) => {
  return (
    <div className="flex items-center max-w-2xl px-4 py-4 mx-auto mb-2 bg-white border border-gray-300 rounded-lg space-x-14 hover:bg-gray-300">
      <Avatar src={imgURL} />
      <Link to={"/groups/" + id}>
        <div className="font-semibold text-gray-700">{groupTitle}</div>
      </Link>
    </div>
  );
};

GroupListItem.defaultProps = {};

export default React.memo(GroupListItem);
