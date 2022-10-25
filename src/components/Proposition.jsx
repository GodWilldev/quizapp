import $ from 'jquery';
import '../styles/proposition.css';

function Proposition({id, text}) {
  const triggerClick = () => {
    $(`input[value=${text}]`).trigger("click");
  }
  return (
    <div className='p-2 my-3 rounded bg-light proposition' onClick={triggerClick}>
        <div className='form-check' >
            <input type="radio" id={"propo-"+id} name="proposition" value={text} className='form-check-input' />
            <label className='form-check-label' htmlFor={"propo-"+id}>{text}</label>
        </div>
    </div>
  )
}

export default Proposition;