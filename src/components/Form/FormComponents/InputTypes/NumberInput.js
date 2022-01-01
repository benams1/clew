import React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from 'prop-types'
import {observer} from "mobx-react";


const NumberInput = ({ label, id, onChange, value = "", error }) => {
  return <TextField
    id={`${id}-field`}
    label={label}
    type={"number"}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    InputLabelProps={{
      shrink: true,
    }}
    error={error}
  />
}

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired
};

export default observer(NumberInput)