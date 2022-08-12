import React from "react";
import Footer from "./Footer";
import GenresInDb from "./GenresInDb";
import LastProductInDb from "./LastProductInDb";
import Metrics from "./Metrics";
import TopBar from './TopBar';
import ProductList from "./ProductList";
import UsersList from "./UsersList";


function ContentWrapper() {
    return(
        <div className='contentWrapper'>
            <TopBar/>
            <h1>Sportix Dashboard</h1>
            <Metrics 
            numberOfMovies = "20"
            numberOfAwards = "$555.453"
            numberOfActors = "28"
            />
            <section className='databaseContent'>
            <LastProductInDb/>
            <GenresInDb/>
            </section>
            <ProductList/>
            <UsersList/>
            <Footer/>
        </div>
    )
}

export default ContentWrapper