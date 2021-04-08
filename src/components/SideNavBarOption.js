import React from "react";
import './Sidebar.css';

function SideNavBarOption(props) {
    return (
        <div className="SideNavBarOption">
            <a href={props.option.url} className="Sidebar">
                <div className="SideNavBarOption-Anchor-Inbox">
                    <span className="SideNavBarOption-Anchor-Inbox-Label">{props.option.name}</span>
                </div>
            </a>
        </div>
    );
}

export default SideNavBarOption;