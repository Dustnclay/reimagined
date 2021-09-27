import "../styles/Header.css"
import {Link} from "react-router-dom"

function Header() {
    return (
      <div style={{backgroundColor: 'black'}}>
          <div className="headerImgDiv">
            <img src={'/MMC_icon_text.png'} className="headerImg"/>
          </div>
          <nav className="Nav">
            {/* <Router> */}
              <Link to="/" className="navLink">Home</Link>
              <Link to="/films" className="navLink">Films</Link>
              <Link to="/pricing" className="navLink">Pricing</Link>
            {/* </Router> */}
          </nav>
      </div>
    );
  }
  
  export default Header;