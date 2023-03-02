import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#home" >Clover Place</Navbar.Brand>
          <Nav className="m-3 gap-5 fst-normal me-5">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Products</Nav.Link>
            <Nav.Link href="/newProduct">Add Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  
    </>
  );
}

export default NavBar;



/* import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <Link to="/products" className="nav--item">My products</Link>
            <Link to="/newProduct" className="nav--item">Add product</Link>
        </nav>
    )
}

export default Navbar */
