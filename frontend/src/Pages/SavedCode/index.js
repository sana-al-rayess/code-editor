import Navbar from "../../components/Navbar/Navbar";
import CodeCard from "../../components/CodeCard";


const SavedCode = () => {
  

  return (
    <div className="cards">
      <div className="header">
        <Navbar />
      </div>
      
      <div className="content">
        <CodeCard />
      </div>
    </div>
  );
}

export default SavedCode;