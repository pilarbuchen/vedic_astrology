import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {
  SelectChangeEvent,
} from '@mui/material/Select';

interface DropDownProps {
  monthList: string;
  setMonthList: React.Dispatch<React.SetStateAction<string>>
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
  
      setMonthList(event.target.value);

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
