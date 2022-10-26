import {useDispatch } from 'react-redux';

import {putQuestions} from '../states/slices/questionsSlice';
import {toggleStartQuiz} from '../states/slices/startQuizSlice';

import musicQuest  from '../datas/questions/music';
import progQuest from '../datas/questions/programming';

import '../styles/welcome.css'


function Welcome() {
    const dispatch = useDispatch();

    const goToMusic = () => {
        dispatch(putQuestions(musicQuest));
        dispatch(toggleStartQuiz());
    }
    const goToProg = () => {
        dispatch(putQuestions(progQuest));
        dispatch(toggleStartQuiz());
    }

    return (
        <div className='text-center'>
            <h1 className='h1'>Welcome to the quiz 🙃🙃🙂</h1>
            <p className='h3'>Choose your topic to start</p>
            <div className="mt-5 d-flex justify-content-around" id='topic-buttons'>
                <button type="button" className="btn btn-light btn-lg border border-5 p-4" onClick={goToMusic}>Music</button>
                <button type="button" className="btn btn-light btn-lg border border-5 p-4" onClick={goToProg}>Programming</button>
            </div>
        </div>
    )
}

export default Welcome