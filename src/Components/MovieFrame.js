import './styles.css'; 

//Component for each individual movie frame
export default function MovieFrame(props){
    const { movie } = props; 
    return (
        <>
            <div className='col-3'>                
                    <div className="card shadow-lg border mb-5">
                    <a href= {`/movies/${movie.id}/${movie.name}`}>
                        <img src={movie.imgUrl} alt={movie.name} className='card-img-top'/>
                        </a>  
                        <div className='card-body'>
                            <p className='card-title'>{movie.name}</p>
                            <div className='d-flex justify-content-between'>
                                <p className='text-muted'>{movie.year}</p>
                                <p className='text-muted'>{movie.hr}h {movie.min}m</p>
                            </div>
                            
                        </div>
                    </div>
                
            </div>
        </> 
    ); 
}