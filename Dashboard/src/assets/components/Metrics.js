import React from "react";
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faSackDollar, faBoxesStacked, faUser} from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"

function Metrics(props) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3040/sportix/products")
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        })
        .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        console.log("Funciona");
    }, [products]) 
    

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3040/sportix/users")
        .then(response => response.json())
        .then(data => {
            setUsers(data);
        })
        .catch(error => console.log(error))
    }, [])


    return(
        <div class="contentRowMovies">
            <section className='statsBox1'>
            <div>   
                <div><h2>Products in data base</h2>
                     <p>{products.total}</p></div>           
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
                <p>{users.total}</p>
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