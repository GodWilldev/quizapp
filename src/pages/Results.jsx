import { useDispatch } from 'react-redux';
import { firstQuestion } from '../features/curQuestSlice';
import { scoreTozero } from '../features/scoreSlice';
import {toggleStartQuiz} from '../features/startQuizSlice';


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
        <div className='d-flex justify-content-between mt-4'>
            <button type='button' className='btn btn-primary' onClick={restart}>Wanna Restart!</button>
            <button type='button' className='btn btn-primary' onClick={goToMainMenu}>Go to Main Menu!</button>
        </div>
    </div>
  )
}

export default Results;