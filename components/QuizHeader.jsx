import { Clock } from 'lucide-react'
import React from 'react'

function QuizHeader({topicName,diffcultyLevel , time,questionNoNow, totalQuestions, questionPersentage, timeRemaing  }) {
  return (
    <div className="outerHeader">
        <div className="headingandloader">
            <div className="headings">
            <h3>{topicName}</h3>
            <div className="headingsInfoBox">
                <p>{totalQuestions} Questions</p>
                <p>{diffcultyLevel}</p>
                <p>{time} min</p>
            </div>
        </div>
        <div className="questionsDisplayContainer">
            <div className="questions">
                <p>Question {questionNoNow} of {totalQuestions}</p>
            </div>
           <div className='outerLoaderBoxOfQuestion'>
             <div className="loaderOfQuestionContainer">
                <div></div>
            </div>
            {questionPersentage}%
           </div>
        </div>

        </div>
        <div className="timerContainer">
            <div className="innerTimerContainer">
                <Clock/> 
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
