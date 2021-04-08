import React from "react";
import './AdminHome.css';
import Sidebar from "../components/Sidebar";
import {data} from "../config/adminHomeData";

function AdminHome() {

    return (
        <div className="Admin-Home-Layout">
            <Sidebar list={data}/>

        </div>
    );
}

export default AdminHome;