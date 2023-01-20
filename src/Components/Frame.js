import React from "react";
import './styles.css'; 

function Frame(props){
    return (
        <div 
            className="styleMovieFrame" 
            style={{
                backgroundImage: `url(${props.backgroundImage})`
              }}
        >
            <p>{props.name}</p>
            <p>{props.filmType}</p>

        </div>
        
    ); 
}

export default Frame;  