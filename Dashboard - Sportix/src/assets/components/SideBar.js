import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../images/mob-logo.svg"
import{faFolder, faChartSimple, faTable} from "@fortawesome/free-solid-svg-icons"

function SideBar() {
    return (
        <div class="sidebar"> 
            <img src= {logo} alt="LogoDH" class='logo'/>
            <hr class='divider'></hr>
            <p class='sidebartitle'>Dashboard - Sportix</p>
            <hr class='divider'></hr>
            <span>Actions</span>
            <ul> 
                <li><FontAwesomeIcon icon={faFolder} /><p>Pages</p></li>
                <li><FontAwesomeIcon icon={faChartSimple} /><p>Charts</p></li>
                <li><FontAwesomeIcon icon={faTable} /><p>Tables</p></li>
            </ul>
            <hr class='divider'></hr>
        </div>
      
    )
}

export default SideBar