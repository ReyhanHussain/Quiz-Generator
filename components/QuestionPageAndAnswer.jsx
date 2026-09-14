import { ArrowLeft, ArrowRight, Bookmark, BookOpenCheck, Check, Lightbulb, X } from 'lucide-react'
import { useState } from 'react'
import OptionsCard from './OptionsCard'


function QuestionPageAndAnswer({ SetCurrentQuestion, currentQuestion, data, quizSettings }) {
    const [submitted, setSubmitted] = useState(false);

    function previousPageHandler() {
        if (currentQuestion <= 0) {
            return
        }
        SetCurrentQuestion(
            (prev) => prev - 1
        )
    }

    function rightPageHandler() {
        if (currentQuestion >= quizSettings.numberOfQuestions - 1) {
            return
        }
        SetCurrentQuestion(
            (prev) => prev + 1
        )
    }
    function submitAnwsers() {




        console.log('submitted');
        setSubmitted(true);


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
            <div className="questionContainer">
                <h4>{data[currentQuestion].question}</h4>
            </div>

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
                {
                    submitted ? (
                        <div className='submitCrossCheckContainer'>
                            <button onClick={()=>setSubmitted(false)}><X /></button>
                            <button><Check /></button>
                        </div>
                    ) :
                        <>
                            <button onClick={previousPageHandler}><ArrowLeft /></button>
                            <span>{currentQuestion + 1} of {quizSettings.numberOfQuestions}</span>

                            {
                                currentQuestion == quizSettings.numberOfQuestions - 1 ?
                                    <button onClick={submitAnwsers}><BookOpenCheck /></button> :
                                    <button onClick={rightPageHandler}><ArrowRight /></button>
                            }
                        </>

                }
            </div>
        </div>

    )
}

export default QuestionPageAndAnswer