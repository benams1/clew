import React from 'react'
import Proptypes from'prop-types'
import LeafQuestion from "./LeafQuestion";
import {SEPARATOR} from "../../../store/Forms";
import {observer} from "mobx-react";
import Grid from "@mui/material/Grid";
import useStore from "../../../store/useStore";

const CompositeQuestion = ({childItems, title, type, options, id, value, isValid }) => {
  const store = useStore();
  return(
    <>
      <div style={{ marginBottom: 15 }}>
        <LeafQuestion
          isValid={isValid}
          title={title}
          type={type}
          options={options}
          id={id}
          value={value}
          number={store.updates}
        />
      </div>
      {childItems && childItems.map(({ parentAnswer, title, type, options, childItems, answer,valid }, index) => {
          const _id = `${id}${SEPARATOR}${index}`;

          return parentAnswer === undefined || value === parentAnswer
            ? (<Grid item key={_id}><CompositeQuestion
              isValid={valid}
              type={type}
              title={title}
              childItems={childItems}
              parentAnswer={parentAnswer}
              options={options}
              value={answer}
              id={_id}
            /></Grid>)
            : null;
        })}
    </>
    );
}

CompositeQuestion.propTypes = {
  ...LeafQuestion.propTypes,
  childItems: Proptypes.array,
  parentAnswer: Proptypes.string,
}
export default observer(CompositeQuestion);
