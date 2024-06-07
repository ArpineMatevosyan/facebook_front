import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useController } from "react-hook-form";

const MainDate = ({ value, onChange, control, name }) => {
  const { field } = useController({ control, name });
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Choose your birthday"
          // value={value}
          // onChange={onChange}
          {...field}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default MainDate;
