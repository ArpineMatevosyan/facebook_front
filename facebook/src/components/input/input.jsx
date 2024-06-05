import { TextField } from "@mui/material";
import { useController } from "react-hook-form";

const Input = ({ type = "text", control, name, className, placeholder }) => {
  const { field } = useController({ control, name });
  return (
    <TextField
      className={className}
      label={placeholder}
      type={type}
      {...field}
    />
  );
};

export default Input;
