import './styles.css'; 

//Component for each individual movie frame
export default function MovieFrame(props){
    const { movie } = props; 
    return (
        <>
            <div className='col-3'>
                {/*Points to movie specific url endpoint*/}
                <a href= {`/movies/${movie.id}/${movie.name}`}>
                    <div className="card mb-5">   
                        <img src={movie.imgUrl} alt={movie.name} className='card-img-top'/>
                        <div className='card-body'>
                            <h6 className='card-title'></h6>
                        </div>
                    </div>
                </a>
            </div>
        </> 
    ); 
}