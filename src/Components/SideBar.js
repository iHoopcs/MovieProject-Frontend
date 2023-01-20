import React from "react";
import SideFilterFrame from "./SideFilter";
import './styles.css'

function SideBar(){
    return (
        <div id="sideBarContainer">

            
            <SideFilterFrame filterName='Anime'/>
            <SideFilterFrame filterName='Action'/>
            <SideFilterFrame filterName='Comedy'/>
            <SideFilterFrame filterName='Horror'/>
            <SideFilterFrame filterName='Mysetry/Science Fiction'/>
            <SideFilterFrame filterName='PG'/>
        </div>
    ); 
}

export default SideBar; 