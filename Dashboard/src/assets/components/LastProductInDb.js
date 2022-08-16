import React from "react";
import { useState, useEffect } from "react"

function LastProductInDb() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3040/sportix/products")
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        })
        .catch(error => console.log(error))
    }, [])


    const lastProduct = products.data
   
    console.log(lastProduct);
   
   
    return(
        <div className='lastMovie'>
            <section className='title'>
                <h1>Last product in Data Base</h1>
            </section>
            <section className='content'>           
                    <div>   
                    {lastProduct?.slice(lastProduct.length -1).map((product, index) => {
                        return (
                        <div key={index}>
                            <img src={'images/productsImages/'+ product.file}/>
                            <h2> {product.name}</h2>
                            <p> {product.description}</p>
                        </div>
        );
      })}
                </div>

            <button>View product details</button>
            </section>
        </div>
    )
}

export default LastProductInDb

