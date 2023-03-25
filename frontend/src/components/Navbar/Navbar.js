import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
 <div className="navbar">
    <div className="logo"><span>Py</span>thonic</div>
    <div className="links">
      <Link to="/" className="linking">Home</Link>
      <Link to="/reg" className="linking">Code Editor</Link>
      <Link to="/aaa" className="linking">Codes</Link>
      <Link to="/aaa" className="linking">Chat</Link>
      {/* <img src="../images/whitesearch.png" alt="search icon"/> */}
      <button id="logout" className="linking">Logout</button>
    </div>
  </div>
  )
}

export default Navbar



