import * as yup from "yup";

export const SignupSchema = yup.object().shape({
    username: yup
        .string()
        .required("Required"),
    password: yup
        .string()
        .required("Required"),
    confirm_password: yup
        .string()
        .required("Required")
        .oneOf([yup.ref('password'), null], 'Passwords must match')
});

