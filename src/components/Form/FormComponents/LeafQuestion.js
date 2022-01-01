import React from 'react'
import PropTypes from 'prop-types'
import NumberInput from "./InputTypes/NumberInput";
import RadioInput from "./InputTypes/RadioInput";
import SelectInput from "./InputTypes/SelectInput";
import useStore from "../../../store/useStore";
import {observer} from "mobx-react";
import Proptypes from "prop-types";

//more input types option from W3schools
// https://www.w3schools.com/html/html_form_input_types.asp

const LeafQuestion = ({ title, id, options, type, value, isValid}) => {
  const store = useStore();
  const onChange = (value) => store.updateField(id, value);
  const hasError = !isValid && !["", null, undefined].includes(value);

  switch (type) {
    case "number":
      return <NumberInput
        label={title}
        id={id}
        onChange={onChange}
        value={value}
        error={hasError}
      />
    case "radio":
      return <RadioInput
        label={title}
        id={id}
        onChange={onChange}
        value={value}
        error={hasError}
      />
    case "select":
      if (options){
        return <SelectInput
          label={title}
          options={options}
          id={id}
          onChange={onChange}
          value={value}
          error={hasError}
        />
      }
      else {
        // todo handle error
        return ;
      }
    default:
      // todo handle error
      return ;
  }
}

LeafQuestion.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf([ "radio", "select", "number" ]).isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  id: Proptypes.oneOfType([Proptypes.string, Proptypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isValid: PropTypes.bool.isRequired
}

export default observer(LeafQuestion)
