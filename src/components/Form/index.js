import React from 'react'
import PropTypes from 'prop-types'
import CompositeQuestion from "./FormComponents/CompositeQuestion";

const Form = ({questions}) => {
  return (
    <form>
      {questions.map((props, index) =>
        (<CompositeQuestion
          key={index}
          type={props.type}
          title={props.title}
          options={props.options}
          childItems={props.childItems}
          value={props.answer}
          id={`${index}`}
        />))}
    </form>
  )

}

Form.propTypes = {
  questions: PropTypes.arrayOf(CompositeQuestion.propTypes).isRequired
}

export default Form