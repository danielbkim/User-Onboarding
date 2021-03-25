// IMPORT everything form the YUP LIBRARY
import * as yup from 'yup';

// EXPORT A SCHEMA BLUEPRINT FOR WHAT TO CHECK FOR TO VALIDATE FORM
// console.log(yup);
export default yup.object().shape({
    name: yup
        .string()
        .required("username is required")
        .min(3, "username must be longer than three characters"),
    email: yup
        .string()
        .email("must be a valid email")
        .required("email is required"),
    password: yup
        .string()
        .min(6, "password must be longer than six characters"),
    termsOfService: yup.boolean()
});