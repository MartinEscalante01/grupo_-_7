import React from "react";
import { useState, useEffect } from "react"


function ProductList () {
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
        
                    <div >
                       
                        <h1>Products List</h1> 
                                
                        <table className="productList">                              
                        <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Category</td>
                                <td>Gender</td>
                         </tr>
                            {product?.map((product, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{product.name}</td>
                                            <td>${product.price}</td>
                                            <td>{product.category}</td>
                                            <td>{product.gender}</td>
                                        </tr>
                                    )
                                })}
                        </table>
                    </div>
                )
            }
   


export default ProductList