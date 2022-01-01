import React, {useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types'


const SelectInput = ({label, options, id, value, onChange}) => {
  // const [value, setValue] = useState('');

  return <FormControl className={"select-input"}>
    <InputLabel id="demo-simple-select-label">{label}</InputLabel>
    <Select
      labelId={`${id}-label`}
      id={id}
      value={value}
      label={label}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map(val => (<MenuItem value={val}>{val}</MenuItem>))}
    </Select>
  </FormControl>
}

SelectInput.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.number.isRequired,
};

export default SelectInput
