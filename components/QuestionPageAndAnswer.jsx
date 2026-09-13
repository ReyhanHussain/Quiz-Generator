import { ArrowLeft, ArrowRight, Bookmark, Lightbulb } from 'lucide-react'
import React from 'react'
import OptionsCard from './OptionsCard'

function QuestionPageAndAnswer({ quizType, questionTitle, options, hint = 'hint here' }) {
    return (
        <div className="questionPageAndAnswerOuterCOnt">
            <div className="questionPageAndAnswerHeader">
                <div className="quizType">
                    {quizType}
                </div>
                <div className="bookmark">
                    <Bookmark  size='16px'/> <span>Bookmark</span>
                </div>
               
                    <div className="upperIcon" title={hint}>
                        <Lightbulb size='16px'/> <span></span>
                    </div>
            </div>
            <h4>{questionTitle}</h4>

            <div className="mainQuestionsOption">
                {
                    quizType.shortType == true ?
                        (
                            <textarea ></textarea>
                        ) :
                        options.map((opt, i) => {
                            return <OptionsCard key={i} question={opt.text} optionName={opt.key} />
                        })

                }
            </div>

            <div className="footerBtn">
                <button><ArrowLeft /> </button>
                <button><ArrowRight /></button>

            </div>

        </div>
    )
}

export default QuestionPageAndAnswer