import Navbar from '../../components/Navbar/Navbar';
import "./CodeEditor.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { Sidebar } from '../../components/sidbar/SidebarFile';

const CodeEditor = () => {
  return (
    <div>
      <Navbar />
      
      <div className="code-editor-container">
         
          <div className="sidebar">
            <Sidebar/>
           </div>

           <div className="in-out-container">
             <div className='input-container'>
                <div className='input-header' >
                    <div>
                    <FontAwesomeIcon icon={faPython} />
                    <span className='sidebar_file-name' >App.py</span>  
                    </div>
                    <div>
                        <button className='run' >
                        Run
                        </button>
                        <button className='save' >
                       Save
                        </button>
                     
                    </div>
                </div>
                <textarea className='input-textarea'></textarea>
            </div>
            <div className='output-container'>
                <div className='output-tabs output-tabs-horizontal'>
                <div className='output-tab'>console</div>
                <div className='output-tab'>output</div>
                <div className='output-tab'>problems</div>
                </div>
                <textarea className='output-textarea'></textarea>
            </div>
           </div>
      </div>
    </div>
  );
}

export default CodeEditor;
