
export default function MovieTemplate(props){
    return(
        <>
            <h1>{props.movieName}</h1>
        <div className="movieTemplate">
        </div>

        <div className="movieInfo">
            <h2>{props.movieName}</h2>
            <h2>Genre: {props.movieType}</h2>
            <h2>Rated: {props.movieRated}</h2>
            <h2>Star Rating: {props.movieStarRating} / 5</h2>
        </div>



        </>
        

        
    )
}