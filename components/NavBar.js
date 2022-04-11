
import NavBarStyle from "../styles/NavBar.module.scss";
import NavTabs from "./NavTabs";  


  const NavBar = props => (
  
    <div className={NavBarStyle.NavBar}>
    <div className = {NavBarStyle.title}> <strong>{props.appTitle}</strong> </div>
      {props.tabs.map(tab => (
        <NavTabs
        key={tab.path}
        path={tab.path}
        label={tab.label}
        icon={tab.icon}
        />
      ))}
    </div>
  );
  
  export default NavBar;