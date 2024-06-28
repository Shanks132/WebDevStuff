import { useRef, useState } from "react";

export default function Login2() {
  const email = useRef()
  const password = useRef()
  
  const [emailIsInvalid,setEmailIsInvalid]=useState(false)
  function handleSubmit(event){
    event.preventDefault()

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    console.log("submitted");
    console.log("Email - ",enteredEmail,"Password - ",enteredPassword)
    
    const emailIsValid = enteredEmail.includes('@')
    if(!emailIsValid){
      setEmailIsInvalid(true)
      return;

    }
    setEmailIsInvalid(false)
    console.log("http request sent...")
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" 
          ref={email}
          
          // onChange={(event)=>handleInputChange('email',event.target.value)}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Enter valid email address !!</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input ref={password} 
          id="password" type="password" name="password" 
          // onChange={(event)=>handleInputChange('password',event.target.value)}
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
