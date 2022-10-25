import $ from 'jquery';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuestion } from '../features/curQuestSlice';
import { incrementScore } from '../features/scoreSlice';

import Proposition from "./Proposition"


function Question({question}) {
    //global state
    //const score = useSelector((state) => state.score.value);
    const currentQuestion = useSelector((state) => state.currentQuestion.value);
    const dispatch = useDispatch();

    //local state
    const [showError , setShowError] = useState(false); //activation of next button
    const [disabledInput , setDisabledInput] = useState(false); //disabled input after confirmation
    const [activeNext , setActiveNext] = useState('disabled'); //activation of next button
    const nextButtonText = (currentQuestion<4)? "Next Question" : "See Results";

    //code color
    const rightAnswerStyle = "border border-4 border-success";
    const wrongAnswerStyle = "border border-4 border-danger";

    const verifyAnswer = () => {
        var inputChecked = $('input[name="proposition"]:checked');
        var inputRight = $(`input[value=${question.answer}]`);

        setShowError(false);
        
        if(inputChecked.length === 0){
            setShowError(true);
            //alert('you must select something');
        } else{
            inputRight.parent().parent().addClass(rightAnswerStyle);
            setDisabledInput(true);
            if(inputChecked.val() === question.answer){
            //alert('right answer');
                dispatch(incrementScore());
            } else{
                inputChecked.parent().parent().addClass(wrongAnswerStyle);
                //alert('wrong answer');
            }
            setActiveNext("");
        }
    }
    const nextQuestion = () => {
        var inputChecked = $('input[name="proposition"]:checked');
        var inputRight = $(`input[value=${question.answer}]`);
        inputRight.parent().parent().removeClass(rightAnswerStyle);
        inputChecked.parent().parent().removeClass(wrongAnswerStyle);
        $('#quiz-form').trigger("reset");
        setActiveNext("disabled");
        setDisabledInput(false);
        dispatch(incrementQuestion());  
    }

    return (
        <div className="p-3 rounded-3">
            <p className='text-center h6'>Question n°{currentQuestion + 1}</p>
            <form id='quiz-form'>
                <fieldset disabled={disabledInput}>
                    <legend className="text-center p-3 border-3 mb-2">
                        <p className="text-white h4">{question.statement}</p>
                    </legend>
                    <div className="mt-2">
                        {question.propositions.map((propo, ind) => (
                            <Proposition key={ind} text={propo} id={ind}/>
                        ))}
                    </div>
                </fieldset>
                <div className="d-flex justify-content-end mt-3">
                    <button type="button" className="btn btn-primary mr-5" onClick={verifyAnswer}>Confirm</button>
                    <button type="button" className={"btn btn-outline-white border border-2 border-primary " + activeNext} id='next-question-button' onClick={nextQuestion}>{nextButtonText}</button>
                </div>
            </form>
            {showError && 
                <div className='mt-4'>
                    <p className='text-dark'>You must select a proposition</p>
                </div>
            }
        </div>
    )
}

export default Question;