import { FC } from 'react';
import { FormControl, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { CRYPTO_PAIRS } from './constants.ts';

interface SelectPairsProps {
  pair: string;
  onChange: (e: SelectChangeEvent) => void;
}

const SelectPairs: FC<SelectPairsProps> = ({ pair, onChange }) => {
  const handleChange = (e: SelectChangeEvent) => {
    onChange(e);
  };

  return (
    <FormControl required sx={{ m: '45px 0 20px 0px', minWidth: 120 }}>
      <Select
        value={pair}
        sx={{
          background: '#ffffff'
        }}
        color="secondary"
        onChange={e => {
          handleChange(e);
        }}
      >
        {Object.entries(CRYPTO_PAIRS).map(pair => (
          <MenuItem value={pair[0]} key={pair[0]}>
            <Typography variant="body1">{pair[1]}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectPairs;
