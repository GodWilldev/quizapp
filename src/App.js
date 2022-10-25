import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import { useSelector } from 'react-redux';

import './styles/App.css';

import Welcome from './pages/Welcome';
import Quiz from './pages/Quiz';



function App() {
  const startQuiz = useSelector((state) => state.startQuiz.value);
  
  return (
    <>
    <div className="App bg-info" >
      {!startQuiz && <Welcome />}
      {startQuiz && <Quiz />}
    </div>
    
    
      </>
    );
}

export default App;