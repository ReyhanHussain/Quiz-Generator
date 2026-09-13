import React from 'react'
import QuestionInfoCard from './QuestionInfoCard'
function QuestionInfoHeader({ questionsArray }) {
  console.log(questionsArray)
  return (
    <div className='questionInfoHeader'>
      {//questionNo, checked
        questionsArray?.map((singleCard, i) => {
          return <QuestionInfoCard key={i} questionNo={singleCard.id} checked={singleCard.checked} />
        })

      }

    </div>
  )
}

export default QuestionInfoHeader

