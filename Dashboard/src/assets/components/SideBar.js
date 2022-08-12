import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import logo from "../images/mob-logo.svg"
import{faFolder, faChartSimple, faTable, faDashboard} from "@fortawesome/free-solid-svg-icons"

class SideBar extends Component {
    render () {
        return (
        <div className="sidebar"> 
            <img src= {logo} alt="LogoDH" className='logo'/>
            <hr className='divider'></hr>
            <p className='sidebartitle'><FontAwesomeIcon icon={faDashboard} />  Dashboard - Sportix  </p>
            <hr className='divider'></hr>
            <span>Actions</span>
            <ul> 
                <li><FontAwesomeIcon icon={faFolder} /><p>Pages</p></li>
                <li><FontAwesomeIcon icon={faChartSimple} /><p>Charts</p></li>
                <li><FontAwesomeIcon icon={faTable} /><p>Tables</p></li>
            </ul>
            <hr className='divider'></hr>
        </div> )
}}
    
      
   

export default SideBar