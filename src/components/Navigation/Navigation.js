import './Navigation.css'

function Navigation({data,StyleNav,StyleUl,StyleLi,StyleA,marginRight}) {
  const liStyle = { ...StyleLi,marginRight};
    return (
        <nav style={StyleNav} className="navigation">
        <ul style={StyleUl} className="navigation__list">
          { Object.keys(data).map(item => 
            <li style={liStyle}key={item} className="navigation__list-item">
              <a style={StyleA}className="navigation__link" href={data[item]}>{item}</a>
              </li>
          )}
        </ul>
      </nav>
   );
 }
 
 export default Navigation;