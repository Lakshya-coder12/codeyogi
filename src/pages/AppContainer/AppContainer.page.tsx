import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import RecordingPage from "./Recording.page";
import Profile from "./Profile.page";

interface Props {}

const AppContainer: React.FC<Props> = (props) => {
  return (
    <>
      <div className="bg-gray-200">
        <div className="sticky top-0 z-10">
          <Navbar />
          <Header />
        </div>
        <div>
          <Switch>
            <Route path="/dashboard">
              <DashboardPage />
            </Route>
            <Route path="/recordings">
              <RecordingPage />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/batch/:batchNumber/lecture/:lectureNumber">
              <LecturePage />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

AppContainer.defaultProps = {};

export default React.memo(AppContainer);
