import { ArrowLeft, ArrowRight, Bookmark, Lightbulb } from 'lucide-react'
import React from 'react'
import OptionsCard from './OptionsCard'

function QuestionPageAndAnswer({ quizType , questionTitle, options, hint='somerandom' }) {
    return (
        <div className="questionPageAndAnswerOuterCOnt">
            <div className="questionPageAndAnswerHeader">
                <div className="quizType">
                    {quizType}
                </div>
                <div className="bookmark">
                    <Bookmark /> <span>Bookmark</span>
                </div>
            </div>
            <h3>{questionTitle}</h3>

            <div className="mainQuestionsOption">
                {
                    quizType.shortType == true ?
                        (
                            <textarea ></textarea>
                        ) :
                        options.map((opt, i) => {
                            return <OptionsCard  key={i} question={opt.text} optionName={opt.key} />
                        })

                }
            </div>

            <div className="footerBtn">
                <button><ArrowLeft /> <span>Previous</span></button>
                <button><ArrowRight /> <span>Next</span></button>

            </div>
            <div className="footer">
                <div className="upperIcon">
                    <Lightbulb /> <span>Hint</span>
                </div>
                <div className="paragraph">
                    {hint}
                </div>
            </div>
        </div>
    )
}

export default QuestionPageAndAnswer