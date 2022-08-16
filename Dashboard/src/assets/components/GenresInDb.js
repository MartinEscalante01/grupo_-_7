import React from "react";
import { useState, useEffect } from "react"



function GenresInDb() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3040/sportix/products")
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        })
        .catch(error => console.log(error))
    }, [])


    const product = products.data
    if (product == undefined) {
        return
    }
    let categories = product.map(category => category.categories.category)
    categories = categories.filter((item,index)=>{
        return categories.indexOf(item) === index;
      })
    console.log(product);
    return(
        <div className='genres'>
            <section class='title'>
                <h1>Categories in Data Base</h1>
                <section className='cards'>  
                    {categories?.map((item, index) =>  {
                                return (
                                <div key={index} className="cardContent">
                                    
                                    <h2> {item}</h2>
                                    
                                </div>
                    );
                })}
                
                </section>
                  
            </section>
        </div>
    )
}

export default GenresInDb