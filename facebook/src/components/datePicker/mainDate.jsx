import * as React from "react";
import { Controller } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import styles from "./mainDate.module.scss";

const MainDate = ({ control, name, label, className }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        render={({ field }) => {
          const formattedDate = field.value ? dayjs(field.value) : null;
          return (
            <DatePicker
              {...field}
              label={label}
              format="YYYY-MM-DD"
              value={formattedDate}
              className={className}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default MainDate;
