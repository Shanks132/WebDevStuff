import { formatter, calculateInvestmentResults } from "../util/investment.js"

export default function OutputRows({data}) {
  
  // console.log(completePortfolio);
  return (
    <tbody>
      {
        data.map(output =>
          <tr key={`${output['year']}}`}>
            <td>{output['year']}</td>
            <td>{formatter.format(output['valueEndOfYear'])}</td>
            <td>{formatter.format(output['interest'])}</td>
            <td>{formatter.format(output['totalInterest'])}</td> 
            <td>{formatter.format(output['totalInvestment'])}</td>
          </tr>
        )
      }
    </tbody>
  )
}