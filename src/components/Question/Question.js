import './Question.css';



function Question({title}) {
    return (
        <>
        <div className="question__item">
            <span className='question__item-title'>{title}</span>
        </div>
        <div className="question__container">Текст</div>
        </>
   )
 }
 
 export default Question;