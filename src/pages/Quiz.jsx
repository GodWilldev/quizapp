import { useSelector } from 'react-redux';

import Question from '../components/Question'
//import { questions } from '../datas/questions/music';
import Results from './Results';

function Quiz() {
  const questions = useSelector((state) => state.questions.value);
  const currentQuestion = useSelector((state) => state.currentQuestion.value);
  const score = useSelector((state) => state.score.value);

  const rate= Math.round(100 * score/questions.length);

  return (
    <div>
      <div className='text-center mb-5'>
        <p className='h2'>{questions[currentQuestion].type} Quiz</p>
      </div>
      {currentQuestion+1<5 && 
        <Question question={questions[currentQuestion]}/>
      }
      {currentQuestion+1>=5 && 
        <Results rate={rate} />
      }
    </div>
  )
}

export default Quiz;