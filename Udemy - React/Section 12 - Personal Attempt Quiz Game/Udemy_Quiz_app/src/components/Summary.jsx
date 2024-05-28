
import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
    const skippedAnswers = userAnswers.filter(answer=> answer===null);
    const correctAnswers = userAnswers.filter((answer,index)=> answer===QUESTIONS[index].answers[0]);
    // const wrongAnswers = userAnswers.filter((answer,index)=> answer!==QUESTIONS[index].answers[0]);

    const skippedAnswersPercentage = (Math.round((skippedAnswers.length/QUESTIONS.length)*100));
    const correctAnswersPercentage = (Math.round((correctAnswers.length/QUESTIONS.length)*100));
    const wrongAnswersPercentage = 100 - skippedAnswersPercentage - correctAnswersPercentage;
    return (
        <div id="summary">
            <img src={quizCompleteImg} alt="trophy" />
            <h2>
                Quiz Completed
            </h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswersPercentage}%</span>
                    <span className="text">Skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswersPercentage}%</span>
                    <span className="text">Answered Correctly</span>
                </p>
                <p>
                    <span className="number">{wrongAnswersPercentage}%</span>
                    <span className="text">Answered Incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer,index) => {
                    let cssClasses = "user-answer";
                    if(answer===null){
                        cssClasses+=" skipped";
                    }
                    else if(answer ===QUESTIONS[index].answers[0]) {
                        cssClasses+= " correct";
                    }
                    else{
                        cssClasses+= " wrong";
                    }
                    return (
                        <li key={index}>
                            <h3>{index+1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className={`user-answer ${cssClasses}`}>{answer ?? "skipped"}</p>
                        </li>

                    )
                })}
            </ol>
        </div>
    )
}