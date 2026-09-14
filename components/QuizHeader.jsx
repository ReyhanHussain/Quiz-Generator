import { Clock } from 'lucide-react'
import React from 'react'

function QuizHeader({ currentQuestion, topicName, diffcultyLevel, time, totalQuestions, questionPersentage = 0 }) {
    return (
        <div className="outerHeader">
            <div className="headingandloader">
                <div className="headings">
                    <h3>{topicName}</h3>
                    <div className="headingsInfoBox">
                        <p>{totalQuestions} Q - </p>
                        <p>{diffcultyLevel}</p>
                    </div>
                </div>
                <div className="questionsDisplayContainer">
                    <div className="questions">
                        <p>Question {currentQuestion} of {totalQuestions}</p>
                    </div>
                    <div className='outerLoaderBoxOfQuestion'>
                        <div className="loaderOfQuestionContainer">
                            <div style={{width: `${questionPersentage(currentQuestion)}%`}}></div>
                        </div>
                        {questionPersentage(currentQuestion)}%
                    </div>
                </div>

            </div>
            <div className="timerContainer">
                <div className="innerTimerContainer">
                    <Clock />
                    <div className="timer">
                        <h4>{time}</h4>
                        <p>Time Remaining</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizHeader
