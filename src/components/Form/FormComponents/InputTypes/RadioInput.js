import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types'
import {observer} from "mobx-react";


const RadioInput = ({ label, id, onChange, value= "" }) => {
  return (
    <FormControl component="fieldset" id={id}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        row
        name={`${id}-group`}
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
        }}
      >
        <FormControlLabel value="1" control={<Radio />} label="Yes" />
        <FormControlLabel value="0" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );
};

RadioInput.propTypes = {
  label: PropTypes,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default observer(RadioInput)
