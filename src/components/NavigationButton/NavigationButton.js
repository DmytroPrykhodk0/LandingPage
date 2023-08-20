import './NavigationButton.css';



function NavigationButton({setButtonState,ButtonState}) {
    return (
           <button onClick={() => setButtonState(!ButtonState)} className="header__button"></button>
   );
 }
 
 export default NavigationButton;