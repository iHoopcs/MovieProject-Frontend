import NavbarComponent from './NavbarComponent';
import './styles.css'; 
import DisplayMovies from './DisplayMovies';

//Default Component to render NavBar & Body components -> exported for use in index.js
export default function Home(props){
    const { movies } = props; 
    return(
        <>
            <NavbarComponent />
            <DisplayMovies movies={movies}/>
        </>
    ); 
}