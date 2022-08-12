import React from "react";
import { useState, useEffect } from "react"


function GenresInDb () {
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
    
    
    const product = products.data
    console.log(product);
    return(
        <div className='genres'>
            <section class='title'>
                <h1>Products in Data Base</h1>
                <section className='cards'>  
                    {product?.map((product, i) => {
                                    return (
                                        <div className='cardContent'>
                                            <h3>{product.category}</h3>
                                            
                                        </div>
                                    )
                                })}
                <p>{products.category}</p>
                </section>
                  
            </section>
        </div>
    )
}

export default GenresInDb