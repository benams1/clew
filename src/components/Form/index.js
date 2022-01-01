import React from 'react'
import PropTypes from 'prop-types'
import CompositeQuestion from "./FormComponents/CompositeQuestion";

const Form = ({questions}) => {
  return (
    <form>
      {questions.map(({ type, title, options, childItems, answer }, index) =>
        (<CompositeQuestion
          key={index}
          type={type}
          title={title}
          options={options}
          childItems={childItems}
          value={answer}
          id={`${index}`}
        />))}
    </form>
  )

}

Form.propTypes = {
  questions: PropTypes.arrayOf(CompositeQuestion.propTypes).isRequired
}

export default Form