import React from "react";
import './styles.css'; 


function Searchbar(){
    return (
        <div>
            <input
                type={'text'}
                placeholder='Type in movie...'
                className="navSearchBar"
            />

            <input 
                type={'button'}
                value='Search'
                className="navSearchBarButton"
            />

        </div>
    ); 
}

export default Searchbar; 