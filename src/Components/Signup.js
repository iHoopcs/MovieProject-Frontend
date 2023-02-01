import './styles.css'; 

//Display signup page 
export default function Signup(){
    return (
        <>
            <h1>Please fill out signup application form.</h1>
            <div className='signupForm'>
                <form action='http://localhost:8080/api/v1/add/user' method='post'>
                    <label>First Name: </label>
                    <input type={'text'} name='firstName' placeholder='John' required ></input>
                    <br></br>
                    <label>Last Name: </label>
                    <input type={'text'} name='lastName' placeholder='Doe' required></input>
                    <br></br>
                    <label>Email: </label>
                    <input type={'email'} name='email' placeholder='Jdoe@aol.com'required></input>
                    <br></br>
                    <label>Age: </label>
                    <input type={'number'} name='age' placeholder='21' required></input>
                    <br></br>
                    <input type={'submit'}></input>
                </form>
            </div>
        </>
    ); 
}