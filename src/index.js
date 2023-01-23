import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import MoviePage from './Components/Movies';
import TvShows from './Components/TvShows';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App(){
    return (
        <BrowserRouter >
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/movies' element={<MoviePage />}/>
                <Route path='/tvshows'element={<TvShows />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/signup' element={<Signup />}/>
            </Routes>
        
        </BrowserRouter>
    ); 
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
); 

