import './Logo.css';

 function Logo({logo,logo2x,logo3x,marginLeft}) {
                return (
                    <a href="/" className="header__logo-link logo-link" style={{marginLeft:marginLeft}}><img className="header__logo logo" src={logo} srcSet={`${logo2x} 2x, ${logo3x} 3x`} alt="Логотип"/></a>
               );
             }
             
    export default Logo;