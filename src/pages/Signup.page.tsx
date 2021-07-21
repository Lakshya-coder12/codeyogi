import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiUser, FiLock, FiAtSign } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import * as yup from "yup";
import Input from "../components/Input/Input";
import { Switch } from "@headlessui/react";
import Button from "../components/Button/Button";

interface Props {}

const Signup: React.FC<Props> = (props) => {
  const [enabled, setEnabled] = useState(false);
  const history = useHistory();
  const formValidator = yup.object().shape({
    username: yup.string().required().min(2),
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
      username: "",
      email: "",
      password: "",
    },
    validationSchema: formValidator,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      console.log(values);
      setTimeout(() => {
        history.push("/login");
      }, 3000);
    },
  });

  return (
    <div className="px-10 pt-16 pb-8 mx-auto">
      <h2 className="mb-2 text-gray-700 text-40 w-96">
        Get started with a free account
      </h2>
      <p className="mt-2 text-sm font-semibold mb-12.5 tracking">
        Already have an account?{" "}
        <Link to="/login">
          <span className="pb-1 text-blue-600 border-b border-blue-600">
            Log in
          </span>
        </Link>{" "}
      </p>
      <form onSubmit={handleSubmit}>
        <Input
          touched={touched.username}
          error={errors.username}
          placeholder="Username"
          type="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          id="username"
          autoComplete="username"
          Icon={FiUser}
          required
        />
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
        <div className="pb-6 mb-2">
          <label className="inline-flex items-center">
            <input type="checkbox" className="w-4 h-4" />
            <span className="ml-3 text-sm text-gray-400">
              I agree to the{" "}
              <span className="text-blue-600 cursor-pointer">
                terms and conditions
              </span>
            </span>
          </label>
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
              Get Started!
            </Button>
          </div>
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

Signup.defaultProps = {};

export default React.memo(Signup);
