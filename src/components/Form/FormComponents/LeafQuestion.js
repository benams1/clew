import React from 'react'
import PropTypes from 'prop-types'
import NumberInput from "./InputTypes/NumberInput";
import RadioInput from "./InputTypes/RadioInput";
import SelectInput from "./InputTypes/SelectInput";
import useStore from "../../../store/useStore";
import {observer} from "mobx-react";

//more input types option from W3schools
// https://www.w3schools.com/html/html_form_input_types.asp

const LeafQuestion = ({ title, id, options, type, value}) => {
  const store = useStore();
  const onChange = (value) => store.updateField(id, value);

  switch (type) {
    case "number":
      return <NumberInput label={title} id={id} onChange={onChange} value={value} />
    case "radio":
      return <RadioInput label={title} id={id} onChange={onChange} value={value} />
    case "select":
      if (options){
        return <SelectInput label={title} options={options} id={id} onChange={onChange} value={value} />
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
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default observer(LeafQuestion)
