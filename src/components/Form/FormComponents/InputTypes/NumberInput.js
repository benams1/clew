import React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from 'prop-types'
import {observer} from "mobx-react";


const NumberInput = ({ label, id, onChange, value }) => {
  return <TextField
    id={id}
    label={label}
    type={"number"}
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
}

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  id: PropTypes.string.isRequired
};

export default observer(NumberInput)