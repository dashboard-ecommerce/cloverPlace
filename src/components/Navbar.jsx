import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";


function NavBar() {
  return (
    <Navbar className="navbar--custom" expand="lg" variant='dark'>
      <Container fluid>
      <Navbar.Brand className="ms-5">Clover Place</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="col justify-content-xl-around">
            
          <Nav.Link href="/" >Products</Nav.Link>
          <Nav.Link href="/newProduct">Add Product</Nav.Link>    
          </Nav>  
          <Form className="form d-flex me-5 ">
            <Form.Control
              type="search"
              placeholder="Search..."
              className="me-4 "
              aria-label="Search"
              autoComplete="off"
            />
            <Button type="button" className="btn btn-success" /* variant="outline-light" */>Search</Button>
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
