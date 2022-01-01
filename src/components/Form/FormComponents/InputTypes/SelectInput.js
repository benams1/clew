import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types'
import {observer} from "mobx-react";
import {SEPARATOR} from "../../../../store/Forms";


const SelectInput = ({label, options, id, value = "", onChange, error}) => {

  return <FormControl className={"select-input"}>
    <InputLabel id={`${id}-label`}>{label}</InputLabel>
    <Select
      labelId={`${id}-select`}
      id={id}
      value={value}
      label={label}
      onChange={(e) => onChange(e.target.value)}
      error={error}
    >
      {options.map((val, index) => (<MenuItem key={`${id}${SEPARATOR}${index}`} value={val}>{val}</MenuItem>))}
    </Select>
  </FormControl>
}

SelectInput.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool.isRequired
};

export default observer(SelectInput)
