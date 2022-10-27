import { useDispatch } from 'react-redux';
import { firstQuestion } from '../states/slices/curQuestSlice';
import { scoreTozero } from '../states/slices/scoreSlice';
import {toggleStartQuiz} from '../states/slices/startQuizSlice';


function Results({rate}) {
  //global state
    //const score = useSelector((state) => state.score.value);
    //const currentQuestion = useSelector((state) => state.currentQuestion.value);
    const dispatch = useDispatch();

  const restart = () => {
    dispatch(scoreTozero());
    dispatch(firstQuestion());
  }
  const goToMainMenu = () => {
    dispatch(scoreTozero());
    dispatch(firstQuestion());
    dispatch(toggleStartQuiz());
  }
  return (
    <div className='text-center mt-3'>
        <p className='h4'>Quiz finished ! 🙃🙃</p>
        <div className='mt-4'>
            <p>You have a succes rate of <span className="text-white h5">{rate}%</span></p>
        </div>
        <div className='d-flex flex-column justify-content-between mt-4'>
            <button type='button' className='btn btn-lg btn-primary mb-3' onClick={restart}>Wanna Restart!</button>
            <button type='button' className='btn btn-lg btn-primary mb-3' onClick={goToMainMenu}>Go to Main Menu!</button>
        </div>
    </div>
  )
}

export default Results;