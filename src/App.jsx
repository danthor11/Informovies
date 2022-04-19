import React, { useState } from 'react'
import MoviesMostPopular from './pages/mostPopularMovies'
import { Header } from './components/header'
import SearchingByTitle from './pages/searchingByTitle';
import { Routes,Route} from 'react-router-dom';
import { About } from './pages/about';
import { NotFound } from './pages/404';
import { Home } from './pages/mainPage';
import { MovieDetails } from './pages/movieDetail';
import { TopMovies } from './pages/topMovies';
import { Footer } from './components/footer';
import SeriesMostPopular from './pages/mostPopularSeries';
import {TopSeries} from "./pages/topSeries"

function App() {

    return (
        <div className="App">
            <Header/>
        
      
            <Routes>        
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/movies/most-popular" element={<MoviesMostPopular/>}/>
                <Route path="/movies/top-250" element={<TopMovies/>} />
                <Route path="/search" element={<SearchingByTitle/>}/>
                <Route path="/search/:movieToSearch" element={<SearchingByTitle/>}/>
                <Route path="/movie/:movieId" element={<MovieDetails/>}/>
                <Route path="/series/most-popular" element={<SeriesMostPopular/>}/>
                <Route path="/series/top-250" element={<TopSeries/>}/>

                <Route path="*" element={<NotFound/>}/>
            </Routes>

            <Footer/>
        
        </div>
    )
}

export default App
