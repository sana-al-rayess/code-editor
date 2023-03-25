import Navbar from '../../components/Navbar/Navbar';
import "./CodeEditor.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder,faChevronRight,faFolderOpen,faFileCode,faFileLines,faFileCsv} from '@fortawesome/free-solid-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';

const CodeEditor = () => {
  return (
    <div>
      <Navbar />
      <div className="code-editor-container">
      <div className="sidebar">
              <div className="sidebar_header">
                <FontAwesomeIcon icon={faFolder} />
                  <h3 className="sidebar_file-name">Files</h3>
              </div>
              <div className="sidebar_file">
              <FontAwesomeIcon icon={faFolderOpen} />
                  <span className="sidebar_file-name">public</span>
              </div>
              <div className="sidebar_file">
              <FontAwesomeIcon icon={faFolderOpen} />
                  <span className="sidebar_file-name">Src</span>
              </div>
              <div className="sidebar_list">
              <div className="sidebar_file">
              <FontAwesomeIcon icon={faFileCode} />
                  <span className="sidebar_file-name">App.py</span>
              </div>
              <div className="sidebar_file">
              <FontAwesomeIcon icon={faFileCode} />
                  <span className="sidebar_file-name">index.py</span>
              </div>
              <div className="sidebar_file">
              <FontAwesomeIcon icon={faFileCsv} />
                  <span className="sidebar_file-name">index.css</span>
              </div>
           
              </div>
              <div className="sidebar_file">
              <FontAwesomeIcon icon={faFileLines} />
                  <span className="sidebar_file-name">Package.json</span>
              </div>
           
              <div className="sidebar_file">
              <FontAwesomeIcon icon={faChevronRight} />
                  <span className="sidebar_file-name"> Dependencies</span>
              </div>
              <div className="sidebar_file">
              <FontAwesomeIcon icon={faChevronRight} />
                  <span className="sidebar_file-name">External resources</span>
              </div>
              <div className="sidebar_file">
              <FontAwesomeIcon icon={faChevronRight} />
                  <span className="sidebar_file-name">Outline</span>
              </div>
              <div className="sidebar_file">
              <FontAwesomeIcon icon={faChevronRight} />
                  <span className="sidebar_file-name">Timeline</span>
              </div>
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
