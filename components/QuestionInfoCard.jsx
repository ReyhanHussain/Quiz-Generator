import { Circle, CircleCheckIcon } from 'lucide-react'
import React from 'react'

function QuestionInfoCard({ questionNo, checked = 'false' }) {
  return (
    <div className="innerQuestionCOntainer">
      <span>{questionNo}</span>
      {
        checked == true ? <CircleCheckIcon /> : <Circle />
      }
    </div>

  )
}

export default QuestionInfoCard