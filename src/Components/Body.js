import React from "react";
import './styles.css'; 
import Frame from "./Frame";

//Movie urls - call as props below
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
const et = 'https://imgc.allpostersimages.com/img/posters/e-t-the-extra-terrestrial_u-L-F9IMPP0.jpg'; 
const inTime = 'https://upload.wikimedia.org/wikipedia/en/4/4b/In_Time_poster.jpg'; 
const theSandlot = 'https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/the-sandlot-1993/large_jr5YC3NmuIhvtqbbEpeSpJyfSbF.jpg'; 
const aladin = 'https://m.media-amazon.com/images/I/516Ril2SA9L._AC_SY780_.jpg'; 
const us = 'https://i.ytimg.com/vi/Nab9plhBFyA/movieposter_en.jpg'; 
const it = 'https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg';  
const scarface = 'https://resizing.flixster.com/q200wLhKclLX_DkUN1bgEeEpi1s=/206x305/v2/https://flxt.tmsimg.com/assets/p7539_p_v12_ao.jpg'; 
const breakingBad = 'https://i.discogs.com/Xqn1j8ah16jTL61uv7YPhPQJakK7vJt5mJg2FLMr82g/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNjgw/MTkyLTE1NDUzODgy/MjktNDcyNi5qcGVn.jpeg'; 
const moneyHeist = 'https://static.displate.com/280x392/displate/2022-03-01/3596dc1bc676cb93c0dad5d14ece28c4_ed7f7e9626f1d6523e0faf57a9b0a3e0.jpg'; 
const onePiece = 'https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg'; 
const attackOnTitan = 'https://cdn.myanimelist.net/images/anime/10/47347.jpg'; 





function Body(){
    return (
        <div id="bodyContainer">

            <div className="positionFrames">
                <Frame name='Spiderman' filmType='Action' backgroundImage={spiderman} />    
                <Frame name='Star Wars' filmType='Action' backgroundImage={starWars}/>    
                <Frame name='Batman' filmType='Action' backgroundImage={batman}/>  
                <Frame name='AntMan' filmType='Action' backgroundImage={antman}/>   
                <Frame name='Friday' filmType='Comedy' backgroundImage={friday} /> 
                <Frame name='Superbad' filmType='Comedy' backgroundImage={superbad}/>  
                <Frame name='The Conjuring 2' filmType='Horror' backgroundImage={theConjuring2}/> 
                <Frame name='The Shining' filmType='Horror' backgroundImage={theShining}/> 
                <Frame name='Interstellar' filmType='Mystery/Science Fiction' backgroundImage={interstellar}/>  
                <Frame name='Lucy' filmType='Mystery/Science Fiction' backgroundImage={lucy}/> 
                <Frame name='Despicable Me' filmType='PG' backgroundImage={despicableMe}/> 
                <Frame name='E.T.' filmType='PG' backgroundImage={et}/>
                <Frame name='In Time' filmType='Action' backgroundImage={inTime}/>
                <Frame name='The Sandlot' filmType='PG' backgroundImage={theSandlot}/>
                <Frame name='Aladin' filmType='PG' backgroundImage={aladin}/>
                <Frame name='Us' filmType='Horror' backgroundImage={us}/>
                <Frame name='It' filmType='Horror' backgroundImage={it}/>
                <Frame name='Scarface' filmType='Action' backgroundImage={scarface}/>
                <Frame name='Breaking Bad' filmType='TV Show' backgroundImage={breakingBad}/>
                <Frame name='Money Heist' filmType='TV Show' backgroundImage={moneyHeist}/>
                <Frame name='One Piece' filmType='Anime' backgroundImage={onePiece}/>
                <Frame name='Attack On Titan' filmType='Anime' backgroundImage={attackOnTitan}/>
                
                   
            </div>

            
           
         
             
            
              
             
            

            
            
            

           
            
        </div>
    ); 
}

export default Body;  