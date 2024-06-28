import { useState } from "react";
import Input from "./Input.jsx";
import { useInput } from "../hooks/useInput.js"
export default function Login() {

  // const [enteredEmail,setEnteredEmail] = useState()
  // const [enteredPassword,setEnteredPassword] = useState()


  // function handleEmailChange(event){
  //   setEnteredEmail(event.target.value)
  // }
  // function handlePasswordChange(event){
  //   setEnteredPassword(event.target.value)
  // }


  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError:emailHasError
    // didEdit
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError:passwordHasError
    // didEdit
  } = useInput('', (value) => isPassword(value) && isNotEmpty(value));


  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
  function handleSubmit(event) {
    event.preventDefault()
    if(emailHasError && passwordHasError){
      console.log("submitted");
      console.log("Email - ", enteredValues.email, "Password - ", enteredValues.password)
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input label="Email" id="email" type="email" name="email"
          error={emailIsInvalid}
          value={emailValue}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
           />

        <div className="control-error">
          {emailHasError && <p>Enter valid email address !!</p>}
        </div>

        <div className="control no-margin">

          <Input
          error={passwordIsInvalid}
          value={passwordValue}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
