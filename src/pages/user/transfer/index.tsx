import { useState } from "react";
import AddButton from "../../../components/AddButton";
import Contact from "../../../components/Contact";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import { Form, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Button from "../../../components/Button";
import ButtonSelect from "../../../components/ButtonSelect";
import { transferValidationSchema } from "./validator";
import ApiClient from "../../../utils/api-client";
import { toast } from "react-hot-toast";

const Transfer = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { recipient: "", amount: "", note: "" },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: transferValidationSchema,
    onSubmit: async (values) => {
      try {
        await ApiClient.transaction.initiateTransfer(
          values.amount,
          values.recipient,
          values.note
        );
        toast.success("Transfer has been initiated!");
        navigate("/");
      } catch {
        toast.error("Error initiating transfer");
      }
    },
  });

  const contacts = [1, 2, 3, 4, 5];

  return (
    <>
      <Modal title="Contact List" open={open} close={() => setOpen(false)}>
        <AddButton text="New Contact" flexDirection="flex-row" size="w-full" />
        <div className="mt-5 text-center flex items-center">
          <span className="h-[0.1rem] flex-1 bg-slate-600/30 w-full"></span>
          <span className=" px-4 font-semibold text-slate-900/30 text-lg">
            or
          </span>
          <span className="h-[.1rem] flex-1 bg-slate-600/30 w-full"></span>
        </div>
        <div>
          <Input type="search" id="username" placeholder="Search contact" />
        </div>
        <div className="space-y-2 mt-4">
          <h3> Contacts</h3>
          <ul className="space-y-4 mt-4 overflow-y-scroll max-h-[300px]">
            {contacts.map((c, i) => (
              <Contact
                onClick={() => {
                  formik.setFieldValue("recipient", "Test5");
                  setOpen(false);
                }}
                key={i}
              />
            ))}
          </ul>
        </div>
      </Modal>

      <section className="space-y-3">
        <h2 className="text-xl font-base font-semibold">Transfer</h2>
        <Form className="mt-10" onSubmit={formik.handleSubmit}>
          <ButtonSelect
            label="Recipient"
            name="recipient"
            placeholder="Choose recipient"
            className="mb-7"
            onSelect={() => setOpen(true)}
            error={formik.errors.recipient}
            value={formik.values.recipient}
          />
          <Input
            type="string"
            pattern="^\d+(\.\d{1,2})?$"
            label="Amount"
            name="amount"
            placeholder="Enter amount"
            className="mb-7"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.amount}
            value={formik.values.amount}
          />
          <Input
            type="text"
            label="Note"
            name="note"
            placeholder="Add a note.."
            className="mb-7"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.note}
            value={formik.values.note}
          />
          <Button
            text="Transfer"
            loading={formik.isSubmitting}
            type="submit"
            disabled={!formik.isValid}
          />
        </Form>
      </section>
    </>
  );
};

export default Transfer;
