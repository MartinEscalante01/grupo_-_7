import React from "react";
import { useState, useEffect } from "react"

function LastProductInDb() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/sportix/products")
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        })
        .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        console.log("Funciona");
    }, [products]) 
    
    const lastProduct = products[ products.length - 1]    
    console.log(lastProduct);
   
   
    return(
        <div className='lastMovie'>
            <section className='title'>
                <h1>Last product in Data Base</h1>
            </section>
            <section className='content'>
            
                    <div>              
                        <img src= "" alt="productPic"/>
                        <p>{lastProduct}  </p>
                
                </div>

            <button>View product details</button>
            </section>
        </div>
    )
}

export default LastProductInDb

