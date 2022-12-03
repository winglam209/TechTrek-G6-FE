import * as React from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useAppContext } from "../context/appContext";
import { ThemeProvider } from "@mui/material";

export default function Calendar({ label }) {
  const [value, setValue] = React.useState(new Date());
  const { setTransactionDate } = useAppContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        className="calendar"
        label={label}
        value={value}
        onChange={(newValue) => {
          let temp = newValue.$d
          setValue(temp);
          setTransactionDate(temp)
        }}
        renderInput={(params) => <TextField {...params} fullWidth />}
      />
    </LocalizationProvider>
  );
}
