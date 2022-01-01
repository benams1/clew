import React from 'react'
import PropTypes from 'prop-types'
import CompositeQuestion from "./FormComponents/CompositeQuestion";
import Grid from "@mui/material/Grid";
import {Button} from "@mui/material";
import useStore from "../../store/useStore";

const Form = ({questions}) => {
  const store = useStore()
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
        <Grid item alignItems={"center"}>
          <Button variant={"contained"} size={"large"} style={{ width: "100%" }} onClick={() => store.submitForm()}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  )

}

Form.propTypes = {
  questions: PropTypes.array.isRequired
}

export default Form