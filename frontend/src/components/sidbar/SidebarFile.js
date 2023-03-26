import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen, faFileCode, faFileCsv, faFileLines, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function SidebarHeader() {
  return (
    <div className="sidebar_header">
      <FontAwesomeIcon icon={faFolder} />
      <h3 className="sidebar_file-name">Files</h3>
    </div>
  );
}

function SidebarFile(props) {
  return (
    <div className="sidebar_file">
      <FontAwesomeIcon icon={props.icon} />
      <span className="sidebar_file-name">{props.name}</span>
    </div>
  );
}

function SidebarList(props) {
  return (
    <div className="sidebar_list">
      {props.children}
    </div>
  );
}


