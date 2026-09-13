import React, { useState } from 'react'
import QuizHeader from '../components/QuizHeader'
import QuestionInfoHeader from '../components/QuestionInfoHeader'
import QuestionPageAndAnswer from '../components/QuestionPageAndAnswer'

function MainPage({currentQuestion, SetCurrentQuestion, data, quizSettings}) {
function percentageHandler(){
return '5'
}
  return (

    <div className='mainPageOuterContainer'>
      <div className="mainpageinner">
        <div className="headerQuiz">

          <QuizHeader

            topicName={data.topicName}
            diffcultyLevel={quizSettings.difficulty}
            time={quizSettings.timeLimit}
            currentQuestion={currentQuestion}
            totalQuestions={quizSettings.numberOfQuestions}
            questionPersentage={percentageHandler}
            timeRemaing={'5:00'}
          />

        </div>
        <div className="questionTrackAndQuizMainPage">
          <QuestionInfoHeader questionsArray = {data.questions}/>
          <QuestionPageAndAnswer SetCurrentQuestion = {SetCurrentQuestion} currentQuestion = {currentQuestion} data = {data.questions} quizSettings = {quizSettings}/>
        </div>
      </div>
    </div>
  )
}

export default MainPage
