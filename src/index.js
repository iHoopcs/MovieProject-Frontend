import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import TvShows from './Components/TvShows';
import Login from './Components/Login';
import Signup from './Components/Signup';
import MoviePage from './Components/MoviePage';








function App(){

    return (
        <BrowserRouter >
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/tvshows'element={<TvShows />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/signup' element={<Signup />}/>
                <Route path='/movie' element={<MoviePage />}/>
            </Routes>
        
        </BrowserRouter>
    ); 
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
); 

