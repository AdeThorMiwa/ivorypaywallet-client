import * as Yup from "yup";
import YupPassword from "yup-password";

YupPassword(Yup);

export const registerValidationSchema = Yup.object().shape({
  username: Yup.string().min(3).max(50).required(),
  password: Yup.string()
    .min(8)
    .minLowercase(1)
    .minUppercase(1)
    .minNumbers(1)
    .minSymbols(1)
    .required(),
});
