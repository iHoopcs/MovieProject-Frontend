import axios from 'axios';
import React, { useState } from 'react'; 
import ReactDOM from 'react-dom'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';
import MovieTemplate from './Components/MovieTemplate';

function App(){
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
                <Route path='/signup' element={<Signup />}/>
                {
                    movies.map((movie) => {
                        return <Route path={`/movies/${movie.id}/`} 
                        element={
                        <MovieTemplate 
                            movieName={movie.name} 
                            movieType={movie.type} 
                            movieStarRating={movie.starRating} 
                            movieRated={movie.rated}
                        />}/>
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

