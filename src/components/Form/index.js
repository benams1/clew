import React from 'react'
import PropTypes from 'prop-types'
import CompositeQuestion from "./FormComponents/CompositeQuestion";
import Grid from "@mui/material/Grid";

const Form = ({questions}) => {
  return (
    <form>
      <Grid container flexDirection={"column"}>
      {questions.map(({ type, title, options, childItems, answer, valid }, index) =>
        (<Grid item key={index} >
          <CompositeQuestion
            isValid={valid}
            type={type}
            title={title}
            options={options}
            childItems={childItems}
            value={answer}
            id={`${index}`}
            />
        </Grid>))}
      </Grid>
    </form>
  )

}

Form.propTypes = {
  questions: PropTypes.array.isRequired
}

export default Form