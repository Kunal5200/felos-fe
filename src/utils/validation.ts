import * as yup from "yup";

const phoneregex = /^\+?[1-9][0-9]{7,14}$/;
export const loanValidationSchema = yup.object({
  fullName: yup
    .string()
    .min(2, "Name is Too Short!")
    .max(50, "Name is too Long")
    .required("Please Enter Name "),
  email: yup
    .string()
    .email("Please Enter Valid Email")
    .required("Please Enter Valid Email"),
  mobileNumber: yup
    .string()
    .required("Please Enter Valid Phone Number")
    .matches(phoneregex, "Please Enter Valid Phone Number"),
  loanType: yup.string().required("Please Select Loan Type"),
  amount: yup.string().required("Please Enter valid Amount"),
  city: yup.string().required("Please Enter Valid City"),
  state: yup.string().required("Please Enter valid State"),
  pinCode: yup.string().required("Please Enter PinCode"),
});

export const partnerValidationSchema = yup.object({
  fullName: yup
    .string()
    .min(2, "Name is Too Short!")
    .max(50, "Name is Too long")
    .required("Please Enter Full Name"),
  email: yup
    .string()
    .email("Please Enter Valid Email")
    .required("Please Enter Email"),
  mobileNumber: yup
    .string()
    .required("Please Enter Valid Phone Number")
    .matches(phoneregex, "Please Enter Valid Phone Number"),
  city: yup.string().required("Please Enter Valid City"),
  state: yup.string().required("Please Enter valid State"),
  pinCode: yup.string().required("Please Enter PinCode"),
});
