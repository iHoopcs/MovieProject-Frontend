import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './Components/styles.css'; 
import SideBar from './Components/SideBar';
import NavBar from './Components/NavBar'; 
import Body from './Components/Body';


function App(){
    return (
        <>
            <NavBar />
            <Body />
            <SideBar />
            
            
        </>
        
    ); 
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
); 

