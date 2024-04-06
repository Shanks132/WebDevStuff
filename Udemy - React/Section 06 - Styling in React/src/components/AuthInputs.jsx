import { useState } from 'react';
import { styled } from 'styled-components'
import Button from './Button.jsx';
import Input from './Input.jsx';

const ControlContainer = styled.div`
  display:flex;
  flex-direction:column;
  gap:0.5rem;
  margin-bottom:1.5rem;
`



//  color: #ef4444;
//   border-color: #f73f3f;
//   background-color: #fed2d2;


export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <div className='paragraph'>
          {/* <Label className={`label ${emailNotValid ? 'invalid' : ''}`}>Email</Label> */}
          <Input
          label = "Email"
            $invalid={emailNotValid}
            type="email"
            // style={{ fontSize: emailNotValid ? 13 : 15 }}
            // className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </div>
        <div>
          
          <Input
            label="Password"
            $invalid={passwordNotValid}
            type="password"
            // className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </div>
      </ControlContainer>
      <div className="actions">
        <Button type="button">
          Create a new account
        </Button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
