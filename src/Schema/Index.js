import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name : Yup.string().required("Please Enter Your Name."),
    email : Yup.string().email().required("Please Enter Your Email."),
    Password : Yup.string().max(20).min(6).required("Please Enter Your Password."),
    Confirm_Password : Yup.string().required().oneOf([Yup.ref("Password"), null , "Password must match"]),
});