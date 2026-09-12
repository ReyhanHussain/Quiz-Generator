import React from 'react'
import QuestionInfoCard from './QuestionInfoCard'
function QuestionInfoHeader({ questionObj }) {
  console.log(questionObj)
  return (
    <div className='questionInfoHeader'>
      {//questionNo, checked
        questionObj.map((singleCard, i) => {
          return <QuestionInfoCard key={i} questionNo={singleCard.id} checked={singleCard.checked} />
        })

      }

    </div>
  )
}

export default QuestionInfoHeader

