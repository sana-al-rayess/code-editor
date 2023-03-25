import { Link } from "react-router-dom";
import './Navbar.css';
import Button from '../../components/Button/button';
import Search from '../../images/whitesearch.png';

const Navbar = () => {
  return (
 <div className="navbar">
    <div className="logo"><span>Py</span>thonic</div>
    <div className="links">
      <Link to="/" className="linking">Home</Link>
      <Link to="/editor" className="linking">Code Editor</Link>
      <Link to="/aaa" className="linking">Codes</Link>
      <Link to="/aaa" className="linking">Chat</Link>
      <img className="search-icon" src={Search} alt="search icon"/>
      <Button id="logout" className="linking">Logout</Button>
    </div>
  </div>
  )
}

export default Navbar



