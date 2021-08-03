import React from "react";
import Avatar from "../../components/Avatar/Avatar";
import Input from "../../components/Input/Input";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

interface Props {}

const Profile: React.FC<Props> = (props) => {
  return (
    <div className="mx-4 mt-6">
      <div className="relative p-5 bg-white rounded-md">
        <h2 className="mx-2 mt-1 mb-10 font-semibold text-gray-600">
          GENERAL INFORMATION
        </h2>
        <div className="lg:grid lg:grid-cols-12">
          <div className="grid grid-cols-12 gap-3 lg:col-span-3">
            <div className="col-span-12 mt-6 border-gray-300 lg:border-r">
              <Avatar
                imgSize="large"
                rounded={false}
                src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              />
              <button className="text-sm text-blue-600 mt-2 mb-2.5 block">
                Upload Picture
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 lg:col-span-9 lg:ml-5">
            <div className="col-span-12 md:col-span-3">
              <label htmlFor="name" className="text-gray-500 text-13">
                First Name
              </label>
              <Input borderStyle="closed" />
            </div>
            <div className="col-span-12 md:col-span-3">
              <label htmlFor="name" className="text-gray-500 text-13">
                Middle Name
              </label>
              <Input borderStyle="closed" />
            </div>
            <div className="col-span-12 md:col-span-3">
              <label htmlFor="name" className="text-gray-500 text-13">
                Last Name
              </label>
              <Input borderStyle="closed" />
            </div>
            <div className="col-span-12 md:col-start-1 md:col-span-3">
              <label htmlFor="date of birth" className="text-gray-500 text-13">
                Date of Birth
              </label>
              <Input borderStyle="closed" type="date" />
              <div className="pt-2.75"></div>
            </div>
          </div>
        </div>
        <div>
          <Link to="/dashboard">
            <span className="text-sm text-blue-600">Go to Dashboard</span>
          </Link>
        </div>
      </div>
      <div className="fixed bottom-0 right-4 left-4 rounded-t-md bg-profile-footer">
        <div className="flex items-center justify-between mx-4 my-3">
          <Button>Reset All</Button>
          <Button theme="success">Save Changes</Button>
        </div>
      </div>
    </div>
  );
};

Profile.defaultProps = {};

export default React.memo(Profile);
