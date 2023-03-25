import MyFace from '../../icons/facebook.png';
import MyIns from '../../icons/instagram.png';
import Mygit from '../../icons/github.png';
import Mytwit from '../../icons/twitter.png';
import './footer.css';


const Footer = () => {

  return (
    <div className="footer">
      <div className="info">
        <p>Mobile app</p>
        <p>Community</p>
        <p>Company</p>
        <p id="center_logo">Pythonic</p>
        <p>Help desk</p>
        <p>Blog</p>
        <p>Resources</p>
      </div>
      <div className="connect">
        <div className="icons">
          <img className="sm_icons" src={MyFace} alt="facebook.png" />
          <img className="sm_icons" src={MyIns} alt="instagram.png"></img>
          <img className="sm_icons" src={Mytwit} alt="twitter.png"></img>
          <img className="sm_icons" src={Mygit} alt="github.png"></img>
        </div>
        <div>
          <p className="slogan">&#9400;Photo,Inc 2023, We love our Users</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;