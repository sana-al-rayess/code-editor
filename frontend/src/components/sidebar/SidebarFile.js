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

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <SidebarFile icon={faFolder} name="public" />
      <SidebarFile icon={faFolderOpen} name="Src" />
      <SidebarList>
        <SidebarFile icon={faFileCode} name="App.py" />
        <SidebarFile icon={faFileCode} name="index.py" />
        <SidebarFile icon={faFileCsv} name="index.css" />
      </SidebarList>
      <SidebarFile icon={faFileLines} name="Package.json" />
      <SidebarFile icon={faChevronRight} name=" Dependencies" />
      <SidebarFile icon={faChevronRight} name="External resources" />
      <SidebarFile icon={faChevronRight} name="Outline" />
      <SidebarFile icon={faChevronRight} name="Timeline" />
    </div>
  );
}


export default Sidebar