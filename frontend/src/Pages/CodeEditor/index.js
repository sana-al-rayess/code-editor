import Navbar from '../../components/Navbar/Navbar';
import "./CodeEditor.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faFolder,faChevronRight, faCaretDown,faFolderOpen,faFileCode,faFileLines,faFileCsv,faCircleChevronRight,faBars} from '@fortawesome/free-solid-svg-icons';


const CodeEditor = () => {
  return (
    <div>
      <Navbar />
      <div className="code-editor-container">
          <div className="sidebar">
              <div className="sidebar_header">
                <FontAwesomeIcon icon={faFolder} />
                  <h3 className="sidebar__header-title">Files</h3>
              </div>
              <div className="sidebar_file">
              <FontAwesomeIcon icon={faFolderOpen} />
                  <span className="sidebar__file-name">public</span>
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
           </div>

           <div className="in-out-container">
            <div className='input-container'>
          
           <div className='input-header' >
             <div>
             <FontAwesomeIcon icon={faPython} />
             <span >App.py</span>  
             </div>
             <div>
                <button className='run'><FontAwesomeIcon icon={faCircleChevronRight} /></button>
                <FontAwesomeIcon icon={faBars} />
             </div>
             </div>

             
            <textarea className='input-textarea'></textarea>
            </div>
            <div className='output-container'>
            <textarea
                className='output-textarea'
                placeholder='Output'>

                </textarea>
            </div>
           </div>
      </div>
    </div>
  );
}

export default CodeEditor;
