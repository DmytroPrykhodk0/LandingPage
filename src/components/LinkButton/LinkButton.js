import './LinkButton.css';
import arrow from './../../assets/arrow.svg';
 function LinkButton({title,background,border,color,selectionMarginTop,selectionMarginLeft}) {
                return (
                    <div className="introduce__link-wrap" style={{marginTop:selectionMarginTop,marginLeft:selectionMarginLeft}}>   
                    <a href="#" style={{backgroundColor:background,border:border,color:color}} className='introduce__link-primary'>{title}</a>
                    <a href="#" style={{backgroundColor:background,border:border}} className='introduce__link-secondary link-secondary'><img src={arrow} className="link-secondary__element"/></a>
                  </div> 
               );
             }
             
    export default LinkButton;