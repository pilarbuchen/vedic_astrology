import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';

interface TimePickerProps {
  valueTime: { $H: number ; $m: number | null; $s: number | null; } | null;
  setValueTime: React.Dispatch<React.SetStateAction<{ $H: number ; $m: number | null; $s: number | null; } | null>>
}


export default function Timepicker({valueTime, setValueTime}: TimePickerProps) {

  console.log(valueTime.$H);
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}>
      <TimeField
        label="Enter Time of Birth"
        value={valueTime}
        onChange={(newValue) =>
          setValueTime(newValue)
        }
        format="HH:mm:ss a"
      />
    </LocalizationProvider>
  );
}
