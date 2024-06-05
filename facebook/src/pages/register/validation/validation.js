import * as yup from "yup";

const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
// pass = Mek1234*
export const schema = yup.object().shape({
  name: yup.string().min(3, "Too short").required("You must have a login"),
  surname: yup.string().required("You must have a login"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .matches(regex, "Wrong format")
    .required("You must a have password"),
  repeatPass: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match!")
    .required("REPEAT IT"),
});
