import React from "react";
import image from "../images/diamondEdge.jpg"
function LastMovieInDb() {
    return(
        <div className='lastMovie'>
            <section className='title'>
                <h1>Last product in Data Base</h1>
            </section>
            <section className='content'>
            <img src= {image} alt="DiamondEdge"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
            <button>View product details</button>
            </section>
        </div>
    )
}

export default LastMovieInDb