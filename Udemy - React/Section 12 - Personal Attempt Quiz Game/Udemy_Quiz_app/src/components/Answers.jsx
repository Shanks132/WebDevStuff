import { useRef } from "react";
export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
    const shuffledAnswers = useRef()
    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }
    return (

        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {

                const isSelected = selectedAnswer == answer;
                // console.log(isSelected)
                let cssClasses = '';
                if (answerState === "answered" && isSelected) {
                    cssClasses = "selected";
                    // console.log("selected status:", answerState)
                }

                if ((answerState === "correct" || answerState === "wrong") && isSelected) {
                    cssClasses = answerState;
                    // console.log("correct or wrong-", answerState)
                }
                return (
                    <li key={answer} className="answer">
                        <button
                            onClick={() => onSelect(answer)}
                            className={cssClasses}
                            disabled={answerState != ''}>
                            {answer}
                        </button>
                    </li>
                )
            }
            )
            }
        </ul>
    )
}