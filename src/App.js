import 'bootstrap/dist/css/bootstrap.min.css';

import { useSelector } from 'react-redux';

import Welcome from './pages/Welcome';
import Quiz from './pages/Quiz';

import './styles/App.css';


function App() {
  const startQuiz = useSelector((state) => state.startQuiz.value);
  
  return (
    <div className="App" >
      {!startQuiz && <Welcome />}
      {startQuiz && <Quiz />}
    </div>
  );
}

export default App;