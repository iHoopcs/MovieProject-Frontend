import axios from 'axios';
import React, { useState } from 'react'; 
import ReactDOM from 'react-dom'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import MovieTemplate from './Components/MovieTemplate';
import AddMoviePage from './Components/AddMoviePage';
import FilteredMovies from './Components/FilteredMovies';

function App(){
    /*Initally fetch api movie data to create each individual movie route*/
    const [movies, setMovies] = useState([]); 
    axios.get('http://localhost:8080/api/movies')
    .then(res => {
        console.log(res.data); 
        setMovies(res.data)
    })

    return (
        <BrowserRouter >
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/addmovie' element={<AddMoviePage />}/>
                
                { /*For each movie, create specific route, display individual movie & attributes*/
                    movies.map((movie) => {
                        return <Route path={`/movies/${movie.id}/`} 
                        element={
                        <MovieTemplate 
                            movieName={movie.name} 
                            movieType={movie.type} 
                            movieStarRating={movie.starRating} 
                            movieRated={movie.rated}
                            movieDescription={movie.movieDescription}
                            movieVideoUrl={movie.videoUrl}
                        />}/>
                    })
                }

                { /*Create movie filter specific routes -> organize different movie genres*/
                    movies.map((movie) => {
                        return <Route path={`/${movie.type}/`} 
                        element={<FilteredMovies movieType={movie.type}/>}/>
                    })
                }
                

                


            </Routes>
        </BrowserRouter>
    ); 
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
); 

