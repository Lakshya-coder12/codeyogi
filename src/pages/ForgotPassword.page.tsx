import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import Input from "../components/Input/Input";
import { FiAtSign } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";
import Button from "../components/Button/Button";

interface Props {}

const ForgotPassword: React.FC<Props> = (props) => {
  const history = useHistory();
  const formValidator = yup.object().shape({
    email: yup.string().required().email(),
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
    },
    validationSchema: formValidator,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      console.log(values);
      setTimeout(() => {
        history.push("/login");
      }, 5000);
    },
  });

  return (
    <div className="mx-auto my-auto">
      <h2 className="text-40">Password Recovery</h2>
      <p className="mt-2 text-sm font-semibold">
        Enter your email and instructions will sent to you!
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
        <div className="flex items-center">
          <Button theme="primary" disabled={!isValid} type="submit">
            Log In
          </Button>
          {isSubmitting && (
            <FaSpinner className="ml-2 animate-spin"></FaSpinner>
          )}
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

ForgotPassword.defaultProps = {};

export default React.memo(ForgotPassword);
