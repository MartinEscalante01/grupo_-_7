import React from "react";
import PropTypes, { number } from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faSackDollar, faBoxesStacked, faUser} from "@fortawesome/free-solid-svg-icons"

function Metrics(props) {
    return(
        <div class="contentRowMovies">
            <section className='statsBox1'>
            <div>
                <h2>Products in database</h2>
                <p>{props.numberOfMovies}</p>
            </div>
            <div className='icon'>
                <FontAwesomeIcon icon= {faBoxesStacked}/>
            </div>
            
        </section>
        
        <section className='statsBox2'>
            <div>
                <h2>Total Account</h2>
                <p>{props.numberOfAwards}</p>
            </div>
            <div className='icon'>
                <FontAwesomeIcon icon= {faSackDollar}/>
            </div>
        </section>
        
        <section class='statsBox3'>
            <div>
                <h2>Users Quantity</h2>
                <p>{props.numberOfActors}</p>
            </div>
            <div class='icon'>
                <FontAwesomeIcon icon= {faUser}/>
            </div>
        </section>
    </div>
    )
}

Metrics.propTypes = {
    title : PropTypes.string.isRequired,
    borderColor : PropTypes.string.isRequired,
    number : PropTypes.number.isRequired,
    icon : PropTypes.string.isRequired,
}

Metrics.defaultProps = {
    title : "Title",
    borderColor : "Black",
    number : 0,
    icon : "!"}

export default Metrics