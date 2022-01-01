import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types'
import {observer} from "mobx-react";


const RadioInput = ({ label, id, onChange, value= "", error }) => {
  return (
    <FormControl error={error} component="fieldset" id={`${id}-radio`}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        row
        name={`${id}-group`}
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
        }}
      >
        <FormControlLabel id={`${id}-true`} value="1" control={<Radio />} label="Yes" />
        <FormControlLabel id={`${id}-false`} value="0" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );
};

RadioInput.propTypes = {
  label: PropTypes,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool.isRequired
}

export default observer(RadioInput)
