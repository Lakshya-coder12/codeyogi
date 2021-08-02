import React, { useState } from "react";
import { useEffect } from "react";
import { fetchGroups } from "../../api/groups";
import { GroupResponseElement } from "../../models/Groups";
import { FiSearch } from "react-icons/fi";
import GroupListItem from "../../components/GroupListItem";
import Button from "../../components/Button/Button";
import { useAppSelector } from "../../store";

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
  const user = useAppSelector((state) => state.me);
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
          {`Welcome! ${user!.first_name} ${user!.middle_name} ${
            user!.last_name
          }`}
        </div>
      </div>
      <div className="flex items-center px-10 space-x-10">
        <div className="flex-1">
          <div className="flex items-center p-2 mb-6 bg-white border border-gray-600 rounded-md">
            <FiSearch className="w-6 h-6 text-blue-600" />
            <input
              className="w-full pl-4 placeholder-gray-300 focus:outline-none"
              placeholder="Type Group Name"
              onChange={handleChange}
            />
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
        <div className="flex-1">
          <div className="flex space-x-6">
            <div className="flex items-center p-2 mb-6 bg-white border border-gray-600 rounded-md">
              <FiSearch className="w-6 h-6 text-blue-600" />
              <input
                className="w-full pl-4 placeholder-gray-300 focus:outline-none"
                placeholder="Type Group Name"
                onChange={(e) => setInputData(e.target.value)}
              />
            </div>
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
