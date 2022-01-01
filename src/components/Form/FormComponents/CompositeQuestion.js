import React from 'react'
import Proptypes from'prop-types'
import LeafQuestion from "./LeafQuestion";
import {SEPARATOR} from "../../../store/Forms";
import PropTypes from "prop-types";

const CompositeQuestion = ({childItems, title, type, options, id, value }) => {
  return(
    <div>
      <LeafQuestion title={title} type={type} options={options} id={id}/>
      {childItems && childItems.map(({ parentAnswer, title, type, options, childItems }, index) => {
          const _id = `${id}${SEPARATOR}${index}`;
          return value === parentAnswer ? (<CompositeQuestion
            key={_id}
            type={type}
            title={title}
            childItems={childItems}
            parentAnswer={parentAnswer}
            options={options}
            id={_id}
          />) : null;
        })}
    </div>
    );
}

CompositeQuestion.propTypes = {
  ...LeafQuestion.propTypes,
  childItems: Proptypes.array,
  parentAnswer: Proptypes.string,
  id: Proptypes.oneOfType([Proptypes.string, Proptypes.number]).isRequired,
  value: PropTypes.string,
}
export default CompositeQuestion;
