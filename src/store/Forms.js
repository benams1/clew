import {action, makeAutoObservable, observable} from "mobx"
import questions from "../Questiones.json"
import {formValidator, getInitiatedForm} from "../utils/formHandler";

export const SEPARATOR = "-";


class Forms {

  activeForm;
  completedForms;
  updates;

  constructor() {
    this.activeForm = getInitiatedForm(questions.patientQuestions);
    this.completedForms = [];
    this.updates = 0;
    this.updateField = this.updateField.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
    this.isValidField = this.isValidField.bind(this);


    makeAutoObservable(this, {
      activeForm:observable,
      updates:observable,
      completedForms: observable,
      updateField: action,
      isFormValid: action,
      isValidField: action,
      submitForm: action,
    }, {autoBind: true})
  }

  updateField(key, value){
    let child = this.activeForm;
    const path = key.split(SEPARATOR);
    const len = path.length;
    path.forEach((_key, index) => {
      if(index === len - 1) {
        child = child[_key]
      } else {
        child = child[_key].childItems
      }
    })
    if (child){
      child.answer = value
      child.valid = this.isValidField(child);
    }
    ++this.updates
  }

  submitForm() {
    this.completedForms.push(this.activeForm);
    this.activeForm = getInitiatedForm(questions.patientQuestions);
  }

  isFormValid() {
    return formValidator(this.activeForm)

  }

  isValidField(question) {
    const value = question.answer;
    switch (question.type) {
      case "number":
        return value && value !== "" && !isNaN(value) && Number(value) >= 0;
      case "radio":
      case "select":
      default:
        return value && value !== "";
    }
  }
}

export default new Forms()