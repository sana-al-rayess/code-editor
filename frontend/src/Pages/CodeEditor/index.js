import Navbar from '../../components/Navbar/Navbar';
import "./CodeEditor.css";
import foldericon from "../../icons/Front.png";
import pythonicon from "../../icons/pyth.jpg"
import python from "../../icons/pythonfile.png"
import cssfile from "../../icons/cssfile.png"
import json from "../../icons/json.jpg"
const CodeEditor = () => {
  return (
    <div>
      <Navbar />
      <div className="code-editor-container">
          <div className="sidebar">

              <div className="sidebar_header">
              <img src={foldericon} alt="Folder Icon" />
                  <h3 className="sidebar_file-name">Files</h3>
              </div>

              <div className="sidebar_file">
              <img src={foldericon} alt="Folder Icon" />
                  <span className="sidebar_file-name">public</span>
              </div>

              <div className="sidebar_file">
              <img src={foldericon} alt="Folder Icon" />
                  <span className="sidebar_file-name">Src</span>
              </div>

              <div className="sidebar_list">

                <div className="sidebar_file">
                <img src={python} alt="Folder Icon" />
                    <span className="sidebar_file-name">App.py</span>
                </div>

                <div className="sidebar_file">
                <img src={python} alt="Folder Icon" />
                    <span className="sidebar_file-name">index.py</span>
                </div>

                <div className="sidebar_file">
                <img src={cssfile} alt="Folder Icon" />
                    <span className="sidebar_file-name">index.css</span>
                </div>

              </div>

              <div className="sidebar_file">
              <img src={json} alt="Folder Icon" />
                  <span className="sidebar_file-name">Package.json</span>
              </div>
           
              <div className="sidebar_file">
              <img src={foldericon} alt="Folder Icon" />
                  <span className="sidebar_file-name"> Dependencies</span>
              </div>

              <div className="sidebar_file">
              <img src={foldericon} alt="Folder Icon" />
                  <span className="sidebar_file-name">External resources</span>
              </div>

           </div>

           <div className="in-out-container">
             <div className='input-container'>
                <div className='input-header' >
                    <div>
                    <img src={pythonicon} alt="Folder Icon" />
                    <span className='sidebar_file-name' >App.py</span>  
                    </div>
                    <div>
                        <button className='run' >
                        Run
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
