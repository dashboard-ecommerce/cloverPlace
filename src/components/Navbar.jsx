import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";


function NavBar() {
  return (
    <Navbar className="navbar--custom" expand="lg">
      <Container fluid>
      <Navbar.Brand>Clover Place</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
          <Nav.Link href="/">Products</Nav.Link>
          <Nav.Link href="/newProduct">Add Product</Nav.Link> 
          </Nav>  
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;  
          
          




/* import Container from 'react-bootstrap/Container';
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
 */


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
