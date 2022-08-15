import React from "react";
import { useState, useEffect } from "react"



function GenresInDb () {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3040/sportix/products")
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        })
        .catch(error => console.log(error))
    }, [])
   
    const product = products
    console.log(product);
    return(
        <div className='genres'>
            <section class='title'>
                <h1>Categories in Data Base</h1>
                <section className='cards'>  
                    {/* {product.map((product, i) => {
                                    return (
                                        <div className='cardContent'>
                                            <h3>{product.categories.category}</h3>
                                            <p>{product.total}</p>
                                            {console.log([product.categories].length)}
                                        </div>
                                    )
                                })} */}
                
                </section>
                  
            </section>
        </div>
    )
}

export default GenresInDb