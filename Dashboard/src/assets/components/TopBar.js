import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faBell, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import image from "../images/jordan-walke.png"


function TopBar (){
    return(
        <div className='topbar'>
            <section className= 'alerts'>
                <FontAwesomeIcon icon={faBell}/>     
                <FontAwesomeIcon icon={faEnvelope}/>
            </section>
            <section className='user'>
                <p>Joaquin Braconi</p>
                <img src= {image} alt="imageUser" />
            </section>
            
        </div>
    )
}

export default TopBar