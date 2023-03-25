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
    </div>
  );
}

export default Footer;