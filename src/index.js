import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';

function App(){

    return (
        <BrowserRouter >
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/signup' element={<Signup />}/>
            </Routes>
        </BrowserRouter>
    ); 
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
); 

