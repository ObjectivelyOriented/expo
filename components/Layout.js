import Header from "./Header";
import NavBar from "./NavBar";
import Head from "next/head";
import LayoutStyle from "../styles/Layout.module.scss";
import tabs from "../config/tabs";


const Layout = props => 
{
  const appTitle = 'TSA Art Gallery';
  return (
    
    <div className={LayoutStyle.Layout} >

<Head>
        <title>TSA Art Expo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>


     <NavBar appTitle = {appTitle} tabs = {tabs} />
      <div className={LayoutStyle.Content}>
        {props.children}
      </div>
     
    </div>
  );
};



//<Header appTitle = {appTitle}/>
export default Layout;