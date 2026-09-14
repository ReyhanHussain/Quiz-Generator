import React, { useState } from 'react'
import QuizHeader from '../components/QuizHeader'
import QuestionInfoHeader from '../components/QuestionInfoHeader'
import QuestionPageAndAnswer from '../components/QuestionPageAndAnswer'

function MainPage({currentQuestion, SetCurrentQuestion, data, quizSettings}) {
function percentageHandler(currQuestion){
  console.log('currQuestion', currQuestion)
  console.log('numberOfQuestions', quizSettings.numberOfQuestions)
return Number( Math.round(( Number(currQuestion) / Number( quizSettings.numberOfQuestions)) * 100));
}
  return (

    <div className='mainPageOuterContainer'>
      <div className="mainpageinner">
        <div className="headerQuiz">

          <QuizHeader

            topicName={data.topicName}
            diffcultyLevel={quizSettings.difficulty}
            time={quizSettings.timeLimit}
            currentQuestion={currentQuestion+1}
            totalQuestions={quizSettings.numberOfQuestions}
            questionPersentage={percentageHandler}
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
