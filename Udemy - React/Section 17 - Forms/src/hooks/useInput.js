import { useState } from "react"
export function useInput(defaultValue,validationFn){

  const [enteredValue, setEnteredValue] = useState(defaultValue)
  const [didEdit, setDidEdit] = useState()
  
  function handleInputBlur() {
    setDidEdit(true)
  }

  const valueIsValid = validationFn(enteredValue)
  function handleInputChange(event) {
    setEnteredValue(event.target.value)
    setDidEdit(false)
  }

  return {
    value:enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError : didEdit && !valueIsValid
    // didEdit
  }
}