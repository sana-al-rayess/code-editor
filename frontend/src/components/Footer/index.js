import MyFace from '../../icons/fb.png';
import MyIns from '../../icons/insta.png';
import Mygit from '../../icons/git.png';
import Mytwit from '../../icons/twit.png';
import './footer.css';


const Footer = () => {

  return (
    <div className="footer">
      <div className="info">
        <p className='hover'>Mobile app</p>
        <p className='hover'>Community</p>
        <p className='hover'>Company</p>
        <p  id="center_logo"><span>Py</span>thonic</p>
        <p className='hover'>Help desk</p>
        <p className='hover'>Blog</p>
        <p className='hover'>Resources</p>
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