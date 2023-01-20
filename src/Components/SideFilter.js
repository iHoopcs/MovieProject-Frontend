import React from "react";
import './styles.css'; 

function SideFilterFrame(props){
    return (
        <div id="sideFilterContainer">
            <h3><a href="/movies/">{props.filterName}</a></h3>
        </div>
    ); 
}

export default SideFilterFrame; 