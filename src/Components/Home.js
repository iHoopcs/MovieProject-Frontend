import axios from 'axios';
import React, { useState } from 'react'; 
import './styles.css'; 


//Component for each individual movie frame
function Frame(props){
    return (
        <>
            {/*Points to movie specific url endpoint*/}
            <a href= {`/movies/${props.id}/`}>
                <div 
                className="styleMovieFrame" 
                style={{
                    backgroundImage: `url(${props.backgroundImage})`
                }}
                >   
                    <p>{props.movieName}</p>
                </div>
            </a>
        </> 
    ); 
}

//Component to Display Movie Frames
function Body(){
    const [movies, setMovies] = useState([])
    //fetch api data & store in array
    axios.get('http://localhost:8080/api/movies')
    .then(res => {
        console.log(res.data)
        setMovies(res.data); 
    })

    return (
        <div id="bodyContainer">
            {
                //Use array to map each movie index to Frame component
                movies.map((movie) => {
                    return <Frame id ={movie.id} movieName={movie.name} backgroundImage={movie.imgUrl} />
                })
            }
        </div>
    ); 
}

function NavBar(){
    return (
        <div id="navBarContainer">
            <div> 
                <h1 className="navBarTitles">ReactMovies.com</h1>
                <h1><AddMovieButton /></h1>
            </div>  
            
        </div>
    ); 
}

//Component to render add movie button -> points to AddMoviePage.js
function AddMovieButton(){
    return (
        <div>
            <button className='addMovie'><a href='/addmovie'>Add Movie</a></button>
        </div>
    ); 
}

//Default Component to render NavBar & Body components -> exported for use in index.js
export default function Home(){
    return(
        <>
            <NavBar />
            <Body />
        </>
    ); 
}