import { Nav, Navbar, Container } from "react-bootstrap";

export default function NavbarComponent() {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand href="/">ReactMovies</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/action">Action</Nav.Link>
                        <Nav.Link href="/anime">Anime</Nav.Link>
                        <Nav.Link href="/comedy">Comedy</Nav.Link>
                        <Nav.Link href="/horror">Horror</Nav.Link>
                        <Nav.Link href="/romance">Romance</Nav.Link>
                        <Nav.Link href="/mystery/sci-fi">Mystery/Sci-Fi</Nav.Link>
                    </Nav>
                    <Nav>
                        <form className="d-flex" role="search" action="http://localhost:8080/searchMovie" method="get">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="type"/>
                            <button class="btn btn-outline-success me-2" type="submit">Search</button>
                        </form>
                        <Nav.Link href="/addMovie">Add Movie</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}