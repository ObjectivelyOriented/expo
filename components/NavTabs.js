import Link from "next/link";
import { withRouter } from "next/router";
import ButtonStyle from "../styles/NavTabs.module.scss";

const NavTabs = props => (
    <Link href ={props.path}>
        <div className={ButtonStyle.Tabs}>
            <div className={ButtonStyle.icon}>{props.icon}</div>
            <span className={ButtonStyle.label}>{props.label}</span>
        </div>
    </Link>
);

export default NavTabs;