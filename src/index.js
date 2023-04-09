import axios from 'axios';
import React, { useEffect, useState } from 'react'; 
import ReactDOM from 'react-dom'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import MovieTemplate from './Components/MovieTemplate';
import AddMoviePage from './Components/AddMoviePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
    //fetch movies from api
    const [movies, setMovies] = useState([]); 
    const fetchMovies = async() => {
        await axios.get('http://localhost:8080/api/movies')
        .then(res => {
            console.log(res.data); 
            setMovies(res.data)
        })
    }
    useEffect(() => {
        fetchMovies();
    }, []); 
    

    return (
        <BrowserRouter >
            <Routes>
                <Route path='/' element={<Home movies={movies}/>}/>
                <Route path='/addmovie' element={<AddMoviePage />}/>
                {
                    movies.map((movie) => {
                        return <Route path={`/movies/${movie.id}/${movie.name}`} 
                        element={
                        <MovieTemplate 
                            movie={movie}
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

