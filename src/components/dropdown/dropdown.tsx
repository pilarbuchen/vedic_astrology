import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {
  SelectChangeEvent,
} from '@mui/material/Select';

interface DropDownProps {
  monthList: number | string;
  setMonthList: (val: number) => void;
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function Dropdown({
  monthList,
  setMonthList,
}: DropDownProps) {
  const handleChange = (
    event: SelectChangeEvent<typeof monthList>
  ) => {
    console.log(event.target.value)
    // if (event.target.value === 'January') {
    //   setMonthList(1);
    // } else if (
    //   event.target.value === 'February'
    // ) {
    //   setMonthList(2);
    // } else if (event.target.value === 'March') {
    //   setMonthList(3);
    // } else if (event.target.value === 'April') {
    //   setMonthList(4);
    // } else if (event.target.value === 'May') {
    //   setMonthList(5);
    // } else if (event.target.value === 'June') {
    //   setMonthList(6);
    // } else if (event.target.value === 'July') {
    //   setMonthList(7);
    // } else if (event.target.value === 'August') {
    //   setMonthList(8);
    // } else if (
    //   event.target.value === 'September'
    // ) {
    //   setMonthList(9);
    // } else if (event.target.value === 'October') {
    //   setMonthList(10);
    // } else if (
    //   event.target.value === 'November'
    // ) {
    //   setMonthList(11);
    // } else if (
    //   event.target.value === 'December'
    // ) {
    //   setMonthList(12);
    // }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 213 }}>
        <InputLabel>Month</InputLabel>
        <Select
          size="small"
          value={monthList}
          onChange={handleChange}
          input={<OutlinedInput label="Month" />}>
          {months.map((month) => (
            <MenuItem
              key={month}
              value={month}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
