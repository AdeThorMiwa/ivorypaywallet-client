import { Form, useLocation } from "react-router-dom";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useFormik } from "formik";
import { registerValidationSchema } from "./validator";
import ApiClient from "../../../utils/api-client";
import { useAuthState } from "../../../state/auth/hook";
import { toast } from "react-hot-toast";
import { useMemo } from "react";

const RegisterPage = () => {
  const { authenticate } = useAuthState();
  const location = useLocation();
  const inviteToken = useMemo(() => {
    const q = new URLSearchParams(location.search);
    if (!q.has("token")) {
      throw new Response("", {
        status: 404,
        statusText: "Page not found",
      });
    }
    return q.get("token") as string;
  }, [location]);

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      try {
        const authToken = await ApiClient.auth.register(
          values.username,
          values.password,
          inviteToken
        );

        authenticate(authToken);
        toast.success("Account creation successful");
      } catch {
        toast.error("Account creation failed");
      }
    },
  });

  return (
    <>
      <AuthHeader text="Create an account" />
      <Form className="my-5" onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          label="Username"
          name="username"
          placeholder="Enter a username"
          className="mb-5"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.username}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          placeholder="Enter a password"
          className="mb-7"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
        />
        <Button
          text="Create"
          loading={formik.isSubmitting}
          type="submit"
          disabled={!formik.isValid}
        />
      </Form>
    </>
  );
};

export default RegisterPage;
