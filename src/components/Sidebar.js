import React from "react";
import './Sidebar.css';
import SideNavBar from "./SideNavBar";

function Sidebar(props) {
    return (
        <div className="Sidebar-Layout">
            <div className="Sidebar">
                <SideNavBar list={props.list}/>
            </div>
        </div>
    );
}

export default Sidebar;