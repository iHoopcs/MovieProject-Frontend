import axios from 'axios';
import React, { useEffect, useState } from 'react'; 
import ReactDOM from 'react-dom'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import MovieTemplate from './Components/MovieTemplate';
import AddMoviePage from './Components/AddMoviePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import GenreMoviePage from './Components/GenreMoviePage';

function App(){
    //fetch all movies from api
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

    //fetch anime movies from api
    const [animes, setAnimes] = useState([]); 
    const fetchAnimeMovies = async() => {
        await axios.get('http://localhost:8080/api/movies/anime')
        .then(res => {
            console.log(res.data); 
            setAnimes(res.data)
        })
    }
    useEffect(() => {
        fetchAnimeMovies();
    }, []); 

    //fetch action movies from api
    const [actions, setActions] = useState([]); 
    const fetchActionMovies = async() => {
        await axios.get('http://localhost:8080/api/movies/action')
        .then(res => {
            console.log(res.data); 
            setActions(res.data)
        })
    }
    useEffect(() => {
        fetchActionMovies();
    }, []); 

    //fetch comedy movies from api
    const [comedies, setComedies] = useState([]); 
    const fetchComedyMovies = async() => {
        await axios.get('http://localhost:8080/api/movies/comedy')
        .then(res => {
            console.log(res.data); 
            setComedies(res.data)
        })
    }
    useEffect(() => {
        fetchComedyMovies();
    }, []);

    //fetch coming of age movies from api
    const [comingOfAges, setComingOfAges] = useState([]);
    const fetchComingOfAgeMovies = async() => {
        await axios.get('http://localhost:8080/api/movies/comingOfAge')
            .then(res => {
                console.log(res.data);
                setComingOfAges(res.data)
            })
    }
    useEffect(() => {
        fetchComingOfAgeMovies();
    }, []);

    //fetch drama movies from api
    const [dramas, setDramas] = useState([]);
    const fetchDramas = async() => {
        await axios.get('http://localhost:8080/api/movies/drama')
            .then(res => {
                console.log(res.data);
                setDramas(res.data)
            })
    }
    useEffect(() => {
        fetchDramas();
    }, []);

    //fetch horror movies from api
    const [horrors, setHorrors] = useState([]); 
    const fetchHorrorMovies = async() => {
        await axios.get('http://localhost:8080/api/movies/horror')
        .then(res => {
            console.log(res.data); 
            setHorrors(res.data)
        })
    }
    useEffect(() => {
        fetchHorrorMovies();
    }, []); 

    //fetch romance movies from api
    const [romances, setRomances] = useState([]); 
    const fetchRomanceMovies = async() => {
        await axios.get('http://localhost:8080/api/movies/romance')
        .then(res => {
            console.log(res.data); 
            setRomances(res.data)
        })
    }
    useEffect(() => {
        fetchRomanceMovies();
    }, []); 

    //fetch all movies from api
    const [mysterySciFi, setMysterySciFi] = useState([]); 
    const fetchMysterySciFiMovies = async() => {
        await axios.get('http://localhost:8080/api/movies/mystery/sci-fi')
        .then(res => {
            console.log(res.data); 
            setMysterySciFi(res.data)
        })
    }
    useEffect(() => {
        fetchMysterySciFiMovies();
    }, []); 
    

    return (
        <BrowserRouter >
            <Routes>
                <Route path='/' element={<Home movies={movies}/>}/>
                <Route path='/addmovie' element={<AddMoviePage />}/>
                <Route path='anime' element={<GenreMoviePage movies={animes}/>}/>
                <Route path='action' element={<GenreMoviePage movies={actions}/>}/>
                <Route path='comedy' element={<GenreMoviePage movies={comedies}/>}/>
                <Route path='comingOfAge' element={<GenreMoviePage movies={comingOfAges}/>}/>
                <Route path='drama' element={<GenreMoviePage movies={dramas}/>}/>
                <Route path='horror' element={<GenreMoviePage movies={horrors}/>}/>
                <Route path='romance' element={<GenreMoviePage movies={romances}/>}/>
                <Route path='mystery/sci-fi' element={<GenreMoviePage movies={mysterySciFi}/>}/>
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

