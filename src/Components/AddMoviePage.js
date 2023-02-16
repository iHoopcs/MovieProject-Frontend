
export default function AddMoviePage(){
    return (
        <>
            <h1>Add Movie</h1>
            <div className="addMovieForm">
                <h3>Fill out form to add movie.</h3>
                <form action="http://localhost:8080/api/addMovie" method="post">
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

                    <input type={'submit'}></input>
                </form>   
            </div>
            
        </>
    )
}