import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiAtSign, FiLock } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import { Switch } from "@headlessui/react";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { login } from "../../api/auth";
import { User } from "../../models/User";

interface Props {
  onLogin: (user: User) => void;
}

const Login: React.FC<Props> = ({ onLogin }) => {
  const [enabled, setEnabled] = useState(false);
  const history = useHistory();
  const formValidator = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  });
  const {
    values,
    handleBlur,
    handleChange,
    isSubmitting,
    touched,
    errors,
    handleSubmit,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formValidator,
    onSubmit: (values) => {
      login(values).then((u) => {
        onLogin(u);
        history.push("/dashboard");
      });
    },
  });

  return (
    <div className="px-10 py-20 mx-auto">
      <h2 className="text-40">
        Log In to <span className="font-semibold text-blue-600">CODEYOGI</span>
      </h2>
      <p className="mt-2 text-sm font-semibold">
        New Here?{" "}
        <Link to="/signup">
          <span className="pb-1 text-blue-600 border-b border-blue-600">
            Create an account
          </span>
        </Link>{" "}
      </p>
      <form className="mt-12.5" onSubmit={handleSubmit}>
        <Input
          touched={touched.email}
          error={errors.email}
          placeholder="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          autoComplete="email"
          Icon={FiAtSign}
          required
        />
        <Input
          touched={touched.password}
          className="mb-2"
          error={errors.password}
          placeholder="Password"
          type={enabled ? "text" : "password"}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
          autoComplete="current-password"
          Icon={FiLock}
          required
        />
        <div className="flex items-center justify-between">
          <Switch.Group>
            <div className="flex items-center">
              <Switch.Label passive className="mr-2 text-sm">
                Show password
              </Switch.Label>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                type="button"
                className={`${
                  enabled ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex items-center h-4 rounded-full w-9 transition-colors focus:outline-none `}
              >
                <span
                  className={`${
                    enabled
                      ? "translate-x-5 bg-white"
                      : "translate-x-0 bg-blue-600"
                  } inline-block w-4 h-4 transform rounded-full transition-transform`}
                />
              </Switch>
            </div>
          </Switch.Group>
          <div className="flex items-center">
            {isSubmitting && (
              <FaSpinner className="mr-2 animate-spin"></FaSpinner>
            )}
            <Button theme="primary" disabled={!isValid} type="submit">
              Log In
            </Button>
          </div>
        </div>
        <div className="mt-16 mb-2 text-center">
          <label className="inline-flex items-center">
            <input type="checkbox" className="w-4 h-4" />
            <span className="ml-2 text-sm text-gray-400">
              Keep me logged in
            </span>
          </label>
        </div>
        <div className="mt-4 text-center">
          <Link to="/forgotpassword">
            <span className="font-semibold text-blue-600 ">
              Forgot password?
            </span>
          </Link>
        </div>
      </form>
      <div className="mt-22.5">
        <p className="text-sm text-center w-96">
          {" "}
          &copy; 2020 All Rights Reserved.{" "}
          <span className="font-semibold text-blue-600 cursor-pointer">
            CODEYOGI
          </span>{" "}
          is a product of Devslane.{" "}
          <span className="font-semibold text-blue-600 cursor-pointer">
            Cookie Preferences
          </span>
          ,{" "}
          <span className="font-semibold text-blue-600 cursor-pointer">
            Privacy
          </span>
          ,{" "}
          <span className="font-semibold text-blue-600 cursor-pointer">
            Terms.
          </span>
        </p>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default React.memo(Login);
