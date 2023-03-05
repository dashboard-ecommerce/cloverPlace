import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";


function NavBar() {
  return (

    <Navbar className="navbar--custom" expand="lg" variant='dark'>
      <Container fluid>
      
          <Navbar.Brand href="#home">
            <img
              src="/cloverplaceOK.png"
              width="200"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        
       {/*  <Navbar.Brand className="ms-5">  cloverPlace</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="col justify-content-xl-around">
            <Nav.Link href="/" >Products</Nav.Link>
            <Nav.Link href="/newProduct">Add Product</Nav.Link>
          </Nav>
         {/*  <Form className="form d-flex me-5 ">
            <Form.Control
              type="search"
              placeholder="Search..."
              className="me-4 "
              aria-label="Search"
              autoComplete="off"
            />
            <Button type="button" className="btn btn-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
