import React from "react";
import './Sidebar.css';
import SideNavBarOption from "./SideNavBarOption";

function SideNavBar(props) {
    return (
        <nav className="Sidebar-Nav">
            <div className="SideNavBar-Wrapper">
                <div className="SideNavBar-Box">
                    {
                        props.list.map(option => <SideNavBarOption option={option}/>)
                    }
                </div>
            </div>
        </nav>
    );
}

export default SideNavBar;