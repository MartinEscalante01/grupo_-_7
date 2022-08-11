import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faAward, faFilm, faUser} from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"
import Metrics from "./Metrics"


function ContentRowMovies(props){

    const metrics =[{
        title : "Movies in data base"
    }, {
        title : "Total Awards"
    }, {
        title : "Actors Quantity"
    }
    
    ]

    return(
        <div>

            <Metrics/>
              
        </div>
    )
}

ContentRowMovies.propTypes = {
    title : PropTypes.string.isRequired,
    borderColor : PropTypes.string.isRequired,
    number : PropTypes.number.isRequired,
    icon : PropTypes.string.isRequired,
}

ContentRowMovies.defaultProps = {
    title : "Title",
    borderColor : "Black",
    number : 0,
    icon : "!"

}

export default ContentRowMovies