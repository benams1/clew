import cloneDeep from "lodash/cloneDeep";

export const getInitiatedForm = (form) => {
  let clonedForm = cloneDeep(form);
  return formInitiator(clonedForm)
}
const formInitiator = (form) => {
  let initiatedForm = [];
  for (let i = 0; i < form.length; ++i ){
    const question = form[i];
    const initiatedChild = {
      ...question,
      valid: false,
      answer: "",
    }
    if (question && question.childItems && question.childItems.length) {
      initiatedChild.childItems = formInitiator(question.childItems);
    }
    initiatedForm = [
      ...initiatedForm,
      initiatedChild,
    ];
  }
  return initiatedForm;
}

export const formValidator = (form) => {
  return !form.find(question => !(question.valid && (!question.childItems || formValidator(question.childItems))))
}