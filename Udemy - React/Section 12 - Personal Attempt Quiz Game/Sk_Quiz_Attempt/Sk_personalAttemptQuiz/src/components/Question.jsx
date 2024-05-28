import { useState } from "react"
import Option from "./Option.jsx"
import ResultModal from "./ResultModal.jsx"
export default function Question({ question, options, correctAnswer,handleSetAnswer}) {
    
    const [selectAnswer, setSelectAnswer] = useState("")
    const [answerStatus, setAnswerStatus] = useState()

    function handleSelectAnswer(selectedOption) {
        setSelectAnswer(selectedOption)
        setAnswerStatus(()=>selectedOption === correctAnswer)
        handleSetAnswer(()=>answerStatus)
    }
    
    return (
        <>
            <ResultModal selectedOption ={selectAnswer} 
            openIfSelected={answerStatus!=null} 
            result={answerStatus}/>
            <div
                id="question"
                className="my-8 bg-purple-900 m-8 mb-5 py-6 text-left px-3 
                border-2 border-black text-4xl">
                {question}
            </div>

            <ol
                className="grid grid-cols-2 gap-4 my-2 list-disc list-inside 
                justify-around items-center text-2xl"
                id="options">
                
                {options.map((option)=>(
                    <Option 
                    correctAnswer={correctAnswer===option}
                    handleSelect={handleSelectAnswer} 
                    option={option}>
                    {option}
                    </Option>
                ))}

                
            </ol>
        </>
    )
}