import React, { useEffect } from "react";
import { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LS_AUTH_TOKEN } from "./api/base";
import { FaSpinner } from "react-icons/fa";
import NotFoundPage from "./pages/NotFound.page";
import AuthPageLazy from "./pages/Auth/Auth.lazy";
import AppContainerPageLazy from "./pages/AppContainer/AppContainer.lazy";
import { me } from "./api/auth";
import { useAppSelector } from "./store";
import { meSelector } from "./selectors/auth.selectors";
import { authActions } from "./actions/auth.actions";

function App() {
  const user = useAppSelector(meSelector);
  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    if (!token) {
      return;
    }
    me().then((u) => authActions.fetch(u));
  }, []);

  if (!user && token) {
    return (
      <div>
        ...loading
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
              <AuthPageLazy />
            </Suspense>
          )}
        </Route>
        <Route
          path={[
            "/dashboard",
            "/recordings",
            "/profile",
            "/batch/:batchNumber/lecture/:lectureNumber",
            "/groups/:groupID",
            "/groups",
          ]}
          exact
        >
          <Suspense fallback={<FaSpinner className="w-5 h-5 animate-spin" />}>
            {user ? <AppContainerPageLazy /> : <Redirect to="/login" />}
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
