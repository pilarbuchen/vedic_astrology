import * as React from 'react';
import dayjs from 'dayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const defaultValue = dayjs('2022-04-17T15:30');

export default function Datepicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateField defaultValue={defaultValue} />
    </LocalizationProvider>
  );
}