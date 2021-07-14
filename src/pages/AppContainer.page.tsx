import React from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import RecordingPage from "./Recording.page";

interface Props {}

const AppContainer: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Switch>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/recordings">
          <RecordingPage />
        </Route>
        <Route path="/batch/:batchNumber/lecture/:lectureNumber">
          <LecturePage />
        </Route>
      </Switch>
    </div>
  );
};

AppContainer.defaultProps = {};

export default React.memo(AppContainer);
