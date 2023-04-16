
export default function AddMoviePage(){
    return (
        <>
            <h1 className="text-center mt-3">Add Movie</h1>
            <div className="addMovieForm mb-3">
                <form action="http://localhost:8080/addMovie" method="post">
                    <label for="name">Name:</label>
                    <input type={'text'} name="name"></input>
                    <br></br>

                    <label for="type">Type: Comedy, Horror, etc.</label>
                    <input type={'text'} name="type"></input>
                    <br></br>

                    <label for="starRating">Star Rating: 0 - 5</label>
                    <input type={'range'} min="0" max="5" name="starRating" list="starRating"></input>
                    <datalist id="starRating">
                        <option value={0}></option>
                        <option value={1}></option>
                        <option value={2}></option>
                        <option value={3}></option>
                        <option value={4}></option>
                        <option value={5}></option>
                    </datalist>
                    <br></br>

                    <label for="rated">Rated: R, PG, etc.</label>
                    <input type={'text'} name="rated"></input>
                    <br></br>

                    <label for="imgUrl">Background Image Url:</label>
                    <input type={'text'} name="imgUrl"></input>
                    <br></br>

                    <label for="videoUrl">Trailer Url:</label>
                    <input type={'text'} name="videoUrl"></input>
                    <br></br>

                    <label for="movieDescription">Description:</label>
                    <input type={'text'} name="movieDescription"></input>
                    <br></br>

                    <label for="year">Year:</label>
                    <input type={'text'} name="year"></input>
                    <br></br>

                    <label for="hr">Hr:</label>
                    <input type={'text'} name="hr"></input>
                    <br></br>

                    <label for="Min">Min:</label>
                    <input type={'text'} name="min"></input>
                    <br></br>


                    <input type={'submit'}></input>
                </form>   
            </div>
            
        </>
    )
}