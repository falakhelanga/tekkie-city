import * as yup from "yup";
export const signInInitialValues = {
  email: "",
  password: "",
};

export const signInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required("this feild is required")
    .email("please enter an valid emeil adress"),

  password: yup.string().required("this feild is required"),
});

export const registerInitialValues = {
  email: "",
  password: "",
  confirm: "",
};

export const reviewInitValues = {
  name: "",
  comment: "",
};

export const adressInitialValues = {
  recipient_name: "",
  recipient_number: "",
  street_adress: "",
  complex: "",
  suburb: "",
  city: "",
  province: "",
  postal_code: "",
};

export const registerValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required("this feild is required")
    .email("please enter an valid emeil adress"),

  password: yup.string().required("this feild is required"),
  confirm: yup
    .string()
    .required("this feild is required")
    .oneOf([yup.ref("password"), null], "passwords does not match"),
});

export const adressValidationSchema = yup.object().shape({
  recipient_name: yup.string().required("this feild is required"),
  recipient_number: yup.string().required("this feild is required"),
  street_adress: yup.string().required("this feild is required"),

  suburb: yup.string().required("this feild is required"),
  city: yup.string().required("this feild is required"),
  province: yup.string().required("this feild is required"),
  postal_code: yup.string().required("this feild is required"),
});

export const reviewValidationSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  comment: yup.string().required("Please write your review"),
});
