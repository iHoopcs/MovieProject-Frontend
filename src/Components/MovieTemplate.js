
export default function MovieTemplate(props){
    return(
        <div>
            <p>Movie Template</p>
            <p>{props.movieName}</p>
            <p>{props.movieId}</p>
            <p>{props.movieUrl}</p>
        </div>
    )
}