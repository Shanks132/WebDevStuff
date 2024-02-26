
import { useState } from "react"
import InputGroup from "./components/InputGroup"
import OutputRows from "./components/OutputRows.jsx"
import { calculateInvestmentResults } from "./util/investment.js"

function App() {
  const investmentValues = { initialInvestment: 100, annualInvestment: 50, expectedReturn: 2.4, duration: 3 }
  let [investmentDetails, setInvestmentDetails] = useState(investmentValues)



  function changeInvestmentDetails(attribute,value) {
    const newInvestmentDetails = {
      ...investmentDetails,
      [attribute]:value
    }
    investmentDetails = newInvestmentDetails
    setInvestmentDetails(newInvestmentDetails) 
  }

  let completePortfolio = calculateInvestmentResults(investmentDetails)
  return (
    <>
      <div id="header">
        <img src="./src/assets/investment-calculator-logo.png" />
        <h1>Investment Calculator</h1>
      </div>

      <div id="user-input">

        <InputGroup investmentDetails={investmentValues} onChangeMethod={changeInvestmentDetails}/>

      </div>

      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <OutputRows
          data={completePortfolio}
          
        />
      </table>
    </>
  )
}

export default App
