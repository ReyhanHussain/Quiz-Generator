import React from 'react'
import QuizHeader from '../components/QuizHeader'
import QuestionInfoHeader from '../components/QuestionInfoHeader'
import QuestionPageAndAnswer from '../components/QuestionPageAndAnswer'
import {data} from '../data/'

function MainPage() {
  return (
    <div className='mainPageOuterContainer'>
      <div className="mainpageinner">
        <div className="headerQuiz">
          <QuizHeader
            topicName={data.topicName}
            diffcultyLevel={data.diffcultyLevel}
            time={data.time}
            questionNoNow={data.questionNoNow}
            totalQuestions={data.totalQuestions}
            questionPersentage={data.questionPersentage}
            timeRemaing={data.timeRemaing}
          />

        </div>
        <div className="questionTrackAndQuizMainPage">
          <QuestionInfoHeader questionObj = {data.questions}/>
          <QuestionPageAndAnswer quizType = {data.quizType} questionTitle={data.questions[0].questionTitle} options={data.questions[0].options}/>
        </div>
      </div>
    </div>
  )
}

export default MainPage
