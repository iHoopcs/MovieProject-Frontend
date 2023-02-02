import React from 'react'; 
import './styles.css'; 



function LoginSignupButtons(){
    return (
        <>
            <button
                    className="signupButton"><a href='/signup'>Sign Up
                </a></button>
            <button
                className="loginButton"><a href='/login'>Login
            </a></button>
        </>
        
    ); 
}

function NavBar(){
    return (
        <div id="navBarContainer">
            <div> 
                <ul>
                    <li className="navBarTitles">ReactMovies.com</li>
                    <li><LoginSignupButtons /></li>
                </ul>   
            </div>  
        </div>
    ); 
}

//Movie image urls - call as props below
const spiderman = 'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/The_Amazing_Spider-Man_theatrical_poster.jpeg/220px-The_Amazing_Spider-Man_theatrical_poster.jpeg';
const starWars ='https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg/220px-The_Empire_Strikes_Back_%281980_film%29.jpg'
const batman = 'https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg'; 
const antman = 'https://upload.wikimedia.org/wikipedia/en/1/12/Ant-Man_%28film%29_poster.jpg';
const friday = 'https://resizing.flixster.com/B8GslHBCQMGKrGP2MJVNgo3Tklg=/300x300/v2/https://flxt.tmsimg.com/assets/p16719_p_v8_ab.jpg';
const superbad = 'https://m.media-amazon.com/images/I/5169stBwr5L._AC_SY580_.jpg';
const theConjuring2 = 'https://m.media-amazon.com/images/I/51CyvQjExtL._AC_SY580_.jpg';
const theShining = 'https://i.ebayimg.com/images/g/9GsAAOSw5HNioLnK/s-l500.jpg';
const interstellar = 'https://i.ebayimg.com/images/g/VnMAAOSwJrpZdOox/s-l500.jpg'; 
const lucy = 'https://upload.wikimedia.org/wikipedia/en/1/14/Lucy_%282014_film%29_poster.jpg'; 
const despicableMe = 'https://www.uphe.com/sites/default/files/styles/scale__344w_/public/025192018176_DVD_2D-X.webp?itok=KHYzKJE_'; 
const inTime = 'https://upload.wikimedia.org/wikipedia/en/4/4b/In_Time_poster.jpg'; 
const theSandlot = 'https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/the-sandlot-1993/large_jr5YC3NmuIhvtqbbEpeSpJyfSbF.jpg'; 
const aladin = 'https://m.media-amazon.com/images/I/516Ril2SA9L._AC_SY780_.jpg'; 
const us = 'https://i.ytimg.com/vi/Nab9plhBFyA/movieposter_en.jpg'; 
const it = 'https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg';  
const scarface = 'https://resizing.flixster.com/q200wLhKclLX_DkUN1bgEeEpi1s=/206x305/v2/https://flxt.tmsimg.com/assets/p7539_p_v12_ao.jpg'; 
const transformers = 'https://upload.wikimedia.org/wikipedia/en/6/66/Transformers07.jpg'; 
const tron = 'https://i.ytimg.com/vi/TiUmrX7CxGA/movieposter.jpg'; 
const yourName = 'https://cdn.myanimelist.net/r/360x360/images/anime/5/87048.jpg?s=3416e76f713a9e2afc2a1009210794c1'; 
const scaryMovie = 'https://m.media-amazon.com/images/I/5123WET5P4L._AC_SY580_.jpg'; 
const backToTheFuture = 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Back_to_the_Future_Part_II.jpg/220px-Back_to_the_Future_Part_II.jpg'; 
const darkKnight = 'https://resizing.flixster.com/WAHXGKleT3QvhqHUlFGIRgcQAjU=/206x305/v2/https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg'; 
const toyStory = 'https://m.media-amazon.com/images/I/51RC8ZR6KBL._AC_SY1000_.jpg'; 
const nowYouSeeMe = 'https://lionsgate.brightspotcdn.com/9d/b3/d6710a094ab188a8ed1fea53c72d/now-you-see-me-poster-01.jpg'; 
const ratatouille = 'https://m.media-amazon.com/images/I/51bOQKCq1ZL._AC_SY580_.jpg'; 
const theMatrix = 'https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY580_.jpg'; 
const jaws = 'https://upload.wikimedia.org/wikipedia/en/e/eb/JAWS_Movie_poster.jpg'; 
const spiritedAway = 'https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/226972/Spirited_1000x1480_TXT.jpg'; 
const theDayAfterTomorrow = 'https://upload.wikimedia.org/wikipedia/en/5/58/The_Day_After_Tomorrow_movie.jpg'; 
const pulpFiction = 'https://www.dontwasteyourmoney.com/wp-content/uploads/2019/07/81UTs3sC5hL._SL1500_-212x300.jpg'; 
const creed = 'https://upload.wikimedia.org/wikipedia/en/2/24/Creed_poster.jpg'; 
const forestGump = 'https://i.ytimg.com/vi/hf_lCA-T99c/movieposter_en.jpg'; 
const freedomWriters = 'https://upload.wikimedia.org/wikipedia/en/7/73/FWPoster.jpg'; 
const boyzNTheHood = 'https://m.media-amazon.com/images/M/MV5BMjE2NDM3ODA5Ml5BMl5BanBnXkFtZTYwMTU4NDc5._V1_.jpg'; 
const et = 'https://play-lh.googleusercontent.com/r55cKa7hnGVkhO2XiSwIVa1N1O6ezhQ0dgNvLeddaaOYz3zAmZ2iAldZDNjDP1a44G8=w240-h480-rw'; 
const loveAndBasketball = 'https://upload.wikimedia.org/wikipedia/en/0/02/LBmoviePoster.jpg'; 
const coachCarter = 'https://movieposters2.com/images/659492-b.jpg'; 

//Component for each individual movie frame
function Frame(props){
    return (
        <>
            {/*Points to movie specific url endpoint*/}
            <a href= {`/${props.movieName}`}>
                <div 
                className="styleMovieFrame" 
                style={{
                    backgroundImage: `url(${props.backgroundImage})`
                }}
                >
                </div>
            </a>
        </> 
    ); 
}

//Component to Display Movie Frames
function Body(){
    return (
        <div id="bodyContainer">
                <Frame backgroundImage={spiderman} movieName="TheAmazingSpiderman"/>    
                <Frame backgroundImage={starWars} movieName="StarWarsTheEmpireStrikesBack"/>    
                <Frame backgroundImage={batman} movieName="Batman"/>  
                <Frame backgroundImage={antman} movieName="Antman"/>   
                <Frame backgroundImage={friday} movieName="Friday"/> 
                <Frame backgroundImage={superbad} movieName="Superbad"/>  
                <Frame backgroundImage={theConjuring2} movieName="TheConjuring2"/> 
                <Frame backgroundImage={theShining} movieName="TheShining"/> 
                <Frame backgroundImage={interstellar} movieName="Interstellar"/>  
                <Frame backgroundImage={lucy} movieName="Lucy"/> 
                <Frame backgroundImage={despicableMe} movieName="DespicableMe"/> 
                <Frame backgroundImage={inTime} movieName="InTime"/>
                <Frame backgroundImage={theSandlot} movieName="TheSandlot"/>
                <Frame backgroundImage={aladin} movieName="Aladin"/>
                <Frame backgroundImage={us} movieName="Us"/>
                <Frame backgroundImage={it} movieName="It"/>
                <Frame backgroundImage={scarface} movieName="Scarface"/>
                <Frame backgroundImage={jaws} movieName="Jaws"/>
                <Frame backgroundImage={spiritedAway} movieName="SpiritedAway"/>
                <Frame backgroundImage={boyzNTheHood} movieName="BoyzNTheHood"/>
                <Frame backgroundImage={freedomWriters} movieName="FreedomWriters"/>
                <Frame backgroundImage={transformers} movieName="Transformers"/>
                <Frame backgroundImage={tron} movieName="TronLegacy"/>
                <Frame backgroundImage={yourName} movieName="YourName"/>
                <Frame backgroundImage={scaryMovie} movieName="ScaryMovie"/>
                <Frame backgroundImage={theDayAfterTomorrow} movieName="TheDayAfterTomorrow"/>
                <Frame backgroundImage={pulpFiction} movieName="PulpFiction"/>
                <Frame backgroundImage={creed} movieName="Creed"/>
                <Frame backgroundImage={forestGump} movieName="ForestGump"/>
                <Frame backgroundImage={backToTheFuture} movieName="BackToTheFuture"/>
                <Frame backgroundImage={darkKnight} movieName="TheDarkKnight"/>
                <Frame backgroundImage={toyStory} movieName="ToyStory"/>
                <Frame backgroundImage={nowYouSeeMe} movieName="NowYouSeeMe"/>
                <Frame backgroundImage={ratatouille} movieName="Ratatouille"/>
                <Frame backgroundImage={theMatrix} movieName="TheMatrix"/>
                <Frame backgroundImage={et} movieName="E.T."/>
                <Frame backgroundImage={coachCarter} movieName="CoachCarter"/>
                <Frame backgroundImage={loveAndBasketball} movieName="Love&Basketball"/>
            </div>
    ); 
}

export default function Home(){
    return(
        <>
            <NavBar />
            <Body />
        </>
    ); 
}