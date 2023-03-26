import Button from "../Button/button";
import "../CodeCard/codecard.css";

const CodeCard = () => {



  return (
    <div className="card">
      <div className="text_section">
        <p id="user_name">User Name</p>
        <p id="date">Date</p>
      </div>
      <div className="butt_section">
        <Button>View Code</Button>
        <Button>Download Code</Button>
      </div>
    </div>
  );
}

export default CodeCard;