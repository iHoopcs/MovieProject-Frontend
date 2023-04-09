
export default function MovieTemplate(props){
    const { movie } = props; 
    return(
        <>
            <h1 className="text-center mb-5">{movie.name}</h1>
            <div className="movie-preview">
            
                <iframe width="800" height="500" src={movie.videoUrl}
                    title={movie.name}
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>

            <div className="movie-preview-info mt-3">
                <div>
                    <h5>{movie.movieDescription}</h5>
                </div>

                <div className="d-flex justify-content-evenly">
                    <p className="text-muted">{movie.type}</p>
                    <p className="text-muted">{movie.rated}</p>
                    <p className="text-muted">{movie.starRating} / 5</p>
                </div>

                
            </div>

            <button className="styleHomeButton mx-5 mb-5"><a href="/">Home</a></button>
        </>
    )
}