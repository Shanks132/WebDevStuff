
import InputBars from "./InputBars"
export default function InputGroup({onChangeMethod,investmentDetails}) {
  
  
  return (
  <>
    <div className="input-group">
      <InputBars label="Inital Investment" inputId="initialInvestment" onChangeValue={onChangeMethod} value={investmentDetails['initialInvestment']} />
      <InputBars label="Annual Investment" inputId="annualInvestment" onChangeValue={onChangeMethod} value={investmentDetails['annualInvestment']}/>    
    </div>
    <br />  
    <br />
    <div className="input-group">
      <InputBars label="Expected Return" inputId="expectedReturn" onChangeValue={onChangeMethod} value={investmentDetails['expectedReturn']} />
      <InputBars label="Duration" inputId="duration" onChangeValue={onChangeMethod} value={investmentDetails['duration']} />
    </div>
  </>
  )
}