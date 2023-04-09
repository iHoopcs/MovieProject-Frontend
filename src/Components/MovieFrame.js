import './styles.css'; 

//Component for each individual movie frame
export default function MovieFrame(props){
    const { movie } = props; 
    return (
        <>
            <div className='col'>
                {/*Points to movie specific url endpoint*/}
                <a href= {`/movies/${movie.id}/${movie.name}`}>
                    <div className="card mb-5 border-danger ">   
                        <img src={movie.imgUrl} alt={movie.name}/>
                    </div>
                </a>
            </div>
        </> 
    ); 
}