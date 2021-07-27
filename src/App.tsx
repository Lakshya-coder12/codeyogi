import React, { useEffect } from "react";
import { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LS_AUTH_TOKEN } from "./api/base";
import { FaSpinner } from "react-icons/fa";
import NotFoundPage from "./pages/NotFound.page";
import AuthPageLazy from "./pages/Auth/Auth.lazy";
import AppContainerPageLazy from "./pages/AppContainer/AppContainer.lazy";
import { useState } from "react";
import { User } from "./models/User";
import { me } from "./api/auth";

function App() {
  const [user, setUser] = useState<User>();
  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    if (!token) {
      return;
    }
    me().then((u) => setUser(u));
  });

  if (!user && token) {
    return (
      <div>
        <FaSpinner className="w-5 h-5 animate-spin" />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
        </Route>
        <Route path={["/login", "/signup", "/forgotpassword"]} exact>
          {user ? (
            <Redirect to="/dashboard" />
          ) : (
            <Suspense fallback={<FaSpinner className="w-5 h-5 animate-spin" />}>
              <AuthPageLazy onLogin={setUser} />
            </Suspense>
          )}
        </Route>
        <Route
          path={[
            "/dashboard",
            "/recordings",
            "/batch/:batchNumber/lecture/:lectureNumber",
          ]}
          exact
        >
          <Suspense fallback={<FaSpinner className="w-5 h-5 animate-spin" />}>
            {user ? (
              <AppContainerPageLazy user={user!} />
            ) : (
              <Redirect to="/login" />
            )}
          </Suspense>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
