import { Circle } from 'lucide-react'
import React from 'react'

function OptionsCard({question,optionName }) {
  return (
    <div className="singleOptionCard">
        <span><Circle/></span>
        <span>{optionName}</span>
        <span>{question}</span>
    </div>
  )
}

export default OptionsCard