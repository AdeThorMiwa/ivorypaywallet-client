import * as Yup from "yup";

export const transferValidationSchema = Yup.object().shape({
  recipient: Yup.string().required(),
  amount: Yup.string()
    .matches(/^\d+(\.\d{1,2})?$/, "Invalid amount")
    .required(),
  note: Yup.string().min(4).required(),
});
