import {action, makeAutoObservable, observable} from "mobx"
import cloneDeep from "lodash/cloneDeep"
import questions from "../Questiones.json"

export const SEPARATOR = "-";


class Forms {

  activeForm;
  completedForms;
  updates;

  constructor() {
    this.activeForm = cloneDeep(questions.patientQuestions);
    this.completedForms = [];
    this.updates = 0;
    this.updateField = this.updateField.bind(this)
    makeAutoObservable(this, {
      activeForm:observable,
      updates:observable,
      completedForms: observable,
      updateField: action
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
    if (child) child.answer = value
    ++this.updates
  }
}

export default new Forms()