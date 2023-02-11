
export default function MovieTemplate(props){
    return(
        <>
            <h1>{props.movieName}</h1>
            <div className="movieTemplate">
            
                <iframe width="1000" height="600" src={props.movieVideoUrl}
                    title={props.movieName} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>

            <div className="movieInfo">
                <div>
                    <h2>{props.movieName}</h2>
                    <h2>Genre: {props.movieType}</h2>
                    <h2>Rated: {props.movieRated}</h2>
                    <h2>Star Rating: {props.movieStarRating} / 5</h2>
                </div>

                <div>
                    <h2>{props.movieDescription}</h2>
                </div>
            </div>

            <button className="styleHomeButton"><a href="/">Home</a></button>
        </>
    )
}