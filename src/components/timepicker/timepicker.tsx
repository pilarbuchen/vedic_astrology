import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';

export default function Timepicker() {
  const [value, setValue] = React.useState(null);

  console.log(value);
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}>
      <TimeField
        label="Enter military time"
        value={value}
        onChange={(newValue) =>
          setValue(newValue)
        }
        format="HH:mm:ss"
      />
    </LocalizationProvider>
  );
}
