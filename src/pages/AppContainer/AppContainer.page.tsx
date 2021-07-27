import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { User } from "../../models/User";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import RecordingPage from "./Recording.page";

interface Props {
  user: User;
}

const AppContainer: React.FC<Props> = ({ user }) => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="flex flex-row">
        <Switch>
          <Route path="/dashboard">
            <DashboardPage user={user} />
          </Route>
          <Route path="/recordings">
            <RecordingPage />
          </Route>
          <Route path="/batch/:batchNumber/lecture/:lectureNumber">
            <LecturePage />
          </Route>
        </Switch>
      </div>
    </>
  );
};

AppContainer.defaultProps = {};

export default React.memo(AppContainer);
