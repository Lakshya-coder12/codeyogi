import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiUser, FiLock } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import { Switch } from "@headlessui/react";
import * as yup from "yup";
import { useFormik } from "formik";

interface Props {}

const Login: React.FC<Props> = (props) => {
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
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      console.log(values);
      setTimeout(() => {
        history.push("/dashboard");
      }, 5000);
    },
  });

  return (
    <div className="px-10 py-20 mx-auto">
      <h2 className="text-4xl">
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
      <form className="mt-10" onSubmit={handleSubmit}>
        <div className="pt-3 pb-6">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <div className="flex items-center pb-3 border-b border-gray-400">
            <FiUser className="w-6 h-6 text-blue-600"></FiUser>
            <input
              className="w-full pl-4 outline-none"
              placeholder="Username"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              autoComplete="email"
              required
            ></input>
          </div>
          {touched.email && <div className="text-red-500">{errors.email}</div>}
        </div>
        <div className="pt-3 pb-6 mb-2">
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className="flex items-center pb-3 border-b border-gray-400">
            <FiLock className="w-6 h-6 text-blue-600"></FiLock>
            <input
              className="w-full pl-4 outline-none"
              placeholder="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="current-password"
              required
            ></input>
          </div>
          {touched.password && (
            <div className="text-red-500">{errors.password}</div>
          )}
        </div>
        <div className="flex items-center justify-between">
          <Switch.Group>
            <div className="flex items-center">
              <Switch.Label passive className="mr-2 text-sm">
                Show password
              </Switch.Label>
              <Switch
                checked={enabled}
                onChange={setEnabled}
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
              <FaSpinner className="w-6 h-6 mr-2 animate-spin"></FaSpinner>
            )}
            <button
              disabled={!isValid}
              type="submit"
              className="px-5 py-2 text-sm text-white bg-blue-600 rounded-md"
            >
              Log In
            </button>
          </div>
        </div>
        <div className="mt-16 mb-2 text-center">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
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
      <div className="mt-24">
        <p className="text-sm text-center w-96">
          {" "}
          &copy; 2020 All Rights Reserved.{" "}
          <span className="font-semibold text-blue-600 cursor-pointer">
            Codeyogi
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