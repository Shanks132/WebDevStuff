
import './App.css'
import { useState } from 'react'
import Header from './components/Header.jsx'
import Question from './components/Question.jsx'

let questionsArray = [
  {Question:"First PM of India",
  options:["Jawaharlal Nehru","MG","NaMo","Bhagat Singh"],
  correctAnswer:"Jawaharlal Nehru",}
  ,
  {Question:"Who is the winner of first IPL",
  options:["Chennai Super Kings","Kolkata Knight Riders","Mumbai Indians","Rajhastan Royals"],
  correctAnswer:"Rajhastan Royals"}
  ,
  {
    Question:"Whose nose did Ram cut off in Ramayana ?",
    options:["Surpanaka","Kaikayi","Raavan","NOTA"],
    correctAnswer:"Surpanaka",
  }
  ,
];


function App() {

  let [questionNumber,setQuestionNumber] = useState(0);
  
  const [answerStatus,setAnswerStatus] = useState("")
  function handleSetAnswer(correctOrNot){

    setAnswerStatus(()=>correctOrNot)
    setQuestionNumber((questionNumber)=>{
      return (++questionNumber);
    })
    correctOrNot = null
    setAnswerStatus("")
  }
  

  return (
    <>
    <p>{answerStatus ? "correct Answer" : "Wrong Answer/No answer selected"}</p>
      <Header/>
      <Question 
      question={questionsArray[questionNumber].Question}
      options={questionsArray[questionNumber].options}
      correctAnswer={questionsArray[questionNumber].correctAnswer}
      answerStatus = {answerStatus}
      handleSetAnswer={handleSetAnswer}/>
    </>
  )
}
export default App