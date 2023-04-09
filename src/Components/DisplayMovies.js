import MovieFrame from "./MovieFrame";

//Component to Display Movie Frames
export default function DisplayMovies(props){
    const { movies } = props; 
    return (
        <div className='container mt-5'>
            <div className='row'>
                {
                    //Use array to map each movie index to Frame component
                    movies.map((movie) => {
                    return <MovieFrame movie={movie} key={movie.id}/>
                    })
                }
            </div>
        </div>
    ); 
}