import HeaderStyle from "../styles/Header.module.scss";

import Link from "next/link";

  const Header = props => (
    <Link href = "/">
       <div className={HeaderStyle.Header}>
      {props.appTitle}
    </div>
    </Link>
   
  );
  
  export default Header;
