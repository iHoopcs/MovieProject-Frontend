import DisplayMovies from "./DisplayMovies";
import NavbarComponent from "./NavbarComponent";
//render movies based on genre
export default function GenreMoviePage(props) {
    const { movies } = props; 
    console.log(props)
    return (
        <>
            <NavbarComponent />
            <DisplayMovies movies={movies}/>
        </>
    ); 
}