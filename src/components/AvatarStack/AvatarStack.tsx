import React from "react";
import Avatar from "../Avatar/Avatar";

interface Props {
  avatars: string[];
}

const AvatarStack: React.FC<Props> = ({ avatars }) => {
  const isLabelRequired = avatars.length > 4;
  const labelText = isLabelRequired && `+${avatars.length - 4} more`;

  return (
    <div className="flex items-center">
      {avatars.slice(0, 4).map((avatar) => (
        <div>
          <Avatar
            src={avatar}
            className="-ml-4 transition duration-200 ease-in-out transform hover:-translate-y-2"
          />
        </div>
      ))}
      {isLabelRequired && (
        <div className="z-10 px-2 py-1 -ml-4 text-sm font-semibold text-center text-blue-600 bg-white rounded-full">
          {labelText}
        </div>
      )}
    </div>
  );
};

AvatarStack.defaultProps = {};

export default React.memo(AvatarStack);
