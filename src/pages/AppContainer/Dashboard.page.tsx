import React, { useState } from "react";
import { useEffect } from "react";
import { fetchGroups } from "../../api/groups";
import { GroupResponseElement } from "../../models/Groups";
import { FiSearch } from "react-icons/fi";
import Input from "../../components/Input/Input";
import GroupListItem from "../../components/GroupListItem";
import Button from "../../components/Button/Button";
import { User } from "../../models/User";

interface Props {
  user: User;
}

const Dashboard: React.FC<Props> = ({ user }) => {
  const [query, setQuery] = useState("");
  const [inputData, setInputData] = useState("");
  const [data, setData] = useState<GroupResponseElement[] | void>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    fetchGroups({ status: "all-groups", query }).then((result) => {
      setData(result);
    });
  }, [query]);
  return (
    <div>
      <div className="mx-10 my-6 bg-gray-100 rounded-lg">
        <div className="p-5 text-2xl font-semibold text-gray-700">
          {`Welcome! ${user.first_name} ${user.middle_name} ${user.last_name}`}
        </div>
      </div>
      <div className="flex items-center px-10 space-x-10">
        <div className="flex-1">
          <Input
            Icon={FiSearch}
            placeholder="Type Group name"
            className="mt-8"
            onChange={handleChange}
          />
          {data &&
            data.map((element, index) => (
              <GroupListItem
                imgURL={element.group_img_url}
                groupTitle={element.name}
                key={index}
              />
            ))}
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <Input
              Icon={FiSearch}
              placeholder="Type Group name"
              className="mt-8"
              onChange={(e) => setInputData(e.target.value)}
            />
            <Button onClick={() => setQuery(inputData)}>Find</Button>
          </div>
          {data &&
            data.map((element, index) => (
              <GroupListItem
                imgURL={element.group_img_url}
                groupTitle={element.name}
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

Dashboard.defaultProps = {};

export default React.memo(Dashboard);
