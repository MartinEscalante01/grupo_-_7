import React from "react";
import ContentRowMovies from "./ContentRowMovies";
import Footer from "./Footer";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
import Metrics from "./Metrics";
import TopBar from './TopBar';


function ContentWrapper() {
    return(
        <div class='contentWrapper'>
            <TopBar/>
            <h1>Sportix Dashboard</h1>
            <Metrics 
            numberOfMovies = "20"
            numberOfAwards = "$555.453"
            numberOfActors = "28"
            />
            <section class='databaseContent'>
            <LastMovieInDb/>
            <GenresInDb/>
            </section>
            <Footer/>
            
        </div>
    )
}

export default ContentWrapper