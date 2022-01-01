import React from "react"
import {action, makeAutoObservable, observable} from "mobx"
import cloneDeep from "lodash/cloneDeep"
import questions from "../Questiones.json"

export const SEPARATOR = "-";


class Forms {

  activeForm;
  completedForms;
  updates;

  constructor() {
    makeAutoObservable(this, {
      activeForm:observable,
      updates:observable,
      completedForms: observable,
      updateField: action

    })
      this.activeForm = cloneDeep(questions.patientQuestions);
    this.completedForms = [];
    this.updates = 0;
    this.updateField = this.updateField.bind(this)
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
    console.log("___child", child) // todo replace with assignment and test change in this.activeForm
    ++this.updates
  }
}

export default new Forms()