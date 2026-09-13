import { ArrowLeft, ArrowRight, Bookmark, Lightbulb } from 'lucide-react'
import React, { useState } from 'react'
import OptionsCard from './OptionsCard'

function QuestionPageAndAnswer({ SetCurrentQuestion, currentQuestion, data, quizSettings }) {

    function previousPageHandler(){
        if(currentQuestion <= 0){
            return
        }
        SetCurrentQuestion(
            (prev)=> prev - 1
        )
    }

    function rightPageHandler(){
        if(currentQuestion >= quizSettings.numberOfQuestions -1){
            return
        }
        SetCurrentQuestion(
            (prev)=>prev + 1
        )
    }

    return (
        <div className="questionPageAndAnswerOuterCOnt">
            <div className="questionPageAndAnswerHeader">
                <div className="quizType">
                    {data[currentQuestion]?.quizType}
                </div>
                <div className="bookmark">
                    <Bookmark size='16px' /> <span>Bookmark</span>
                </div>
                <div className="upperIcon" title={data[currentQuestion].hint}>
                    <Lightbulb size='16px' /> <span></span>
                </div>
            </div>
            <h4>{data[currentQuestion].question}</h4>

            <div className="mainQuestionsOption">
                {
                    (data[currentQuestion].quizType == 'Text') == true ?
                        (
                            <textarea ></textarea>
                        ) :
                        data[currentQuestion].options.map((opt, i) => {
                            return <OptionsCard key={i} question={opt} />
                        })

                }
            </div>

            <div className="footerBtn">
                <button onClick={previousPageHandler}><ArrowLeft /></button>
                <span>{currentQuestion} of {quizSettings.numberOfQuestions}</span>
                <button onClick={rightPageHandler}><ArrowRight /></button>

            </div>

        </div>
    )
}

export default QuestionPageAndAnswer