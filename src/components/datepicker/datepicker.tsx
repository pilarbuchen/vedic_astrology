import * as React from 'react';
import { DateField } from '@mui/x-date-pickers/DateField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface DatePickerProps {
  valueDate: { $M: number ; $D: number | null; $y: number | null; } | null;
  setValueDate: React.Dispatch<React.SetStateAction<{ $M: number ; $D: number | null; $y: number | null; } | null>>
}

export default function Datepicker({valueDate, setValueDate}: DatePickerProps) {
 
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateField 
            label="Controlled field"
            value={valueDate}
            onChange={(value) => setValueDate(value)} />
    </LocalizationProvider>
  );
}