import React from "react";
import './styles.css'; 
import Searchbar from "./SearchBar";

function NavBar(){
    return (
        <div id="navBarContainer">
            <div> 
                <ul>
                    <li className="styleNavBarTitles">React Web Project </li>
                    <li className="styleNavBarTitles"><a href='/tvshows'>TV Shows</a> </li>
                    <li className="styleNavBarTitles"><a href='/movies'>Movies</a></li>
                </ul>   
            </div>
            
            <div>
                <Searchbar />
            </div>
            
            
        </div>
    ); 
}

export default NavBar;  