import { Circle, CircleCheckIcon } from 'lucide-react'
import React from 'react'

function QuestionInfoCard({ questionNo, checked = 'false' }) {
  return (
    <div className="innerQuestionCOntainer">
      <span>{questionNo}</span>
      {
        checked == true ? <CircleCheckIcon color='green' size='12px'/>  : <Circle size={'12px'} color='red' />
      }
    </div>

  )
}

export default QuestionInfoCard