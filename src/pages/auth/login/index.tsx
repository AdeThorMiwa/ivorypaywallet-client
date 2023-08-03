import { Form } from "react-router-dom";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useFormik } from "formik";
import { loginValidationSchema } from "./validator";
import ApiClient from "../../../utils/api-client";
import { useAuthState } from "../../../state/auth/hook";
import { toast } from "react-hot-toast";

const RegisterPage = () => {
  const { authenticate } = useAuthState();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        const authToken = await ApiClient.auth.login(
          values.email,
          values.password
        );

        authenticate(authToken);
        toast.success("Login successful");
      } catch {
        toast.error("Login failed, please try again.");
      }
    },
  });

  return (
    <>
      <AuthHeader text="Login" />
      <Form className="my-5" onSubmit={formik.handleSubmit}>
        <Input
          type="email"
          label="Email"
          name="email"
          placeholder="Enter your email"
          className="mb-5"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          placeholder="Enter your password"
          className="mb-7"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
        />
        <Button
          text="Login"
          loading={formik.isSubmitting}
          type="submit"
          disabled={!formik.isValid}
        />
      </Form>
    </>
  );
};

export default RegisterPage;
