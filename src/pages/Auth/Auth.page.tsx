import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthHero from "../../components/AuthHero";
import { User } from "../../models/User";
import ForgotPassword from "./ForgotPassword.page";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";

interface Props {
  onLogin: (user: User) => void;
}

const Auth: React.FC<Props> = ({ onLogin }) => {
  return (
    <div className="flex flex-row justify-between">
      <Switch>
        <Route path="/login">
          <LoginPage onLogin={onLogin} />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>
      </Switch>
      <AuthHero></AuthHero>
    </div>
  );
};

Auth.defaultProps = {};

export default React.memo(Auth);
