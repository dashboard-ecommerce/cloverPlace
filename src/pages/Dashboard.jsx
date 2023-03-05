import { useLoaderData } from "react-router-dom"
import { useState } from "react";
import { productHandler } from "../handlers/productHandler";
import Product from '../components/Product'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Dashboard.css'
import Container from 'react-bootstrap/Container';
import  Form  from 'react-bootstrap/Form';
import  InputGroup  from 'react-bootstrap/InputGroup';

function Dashboard() {
    const { products } = useLoaderData();
    const [productsData, setProductsData] = useState(products);
    const [search,setSearch] = useState("")
    const deleteProduct = async (id) => {
      await productHandler.deleteProduct(id);
      setProductsData(productsData.filter(product => product.id !== id))
  }

    return (
        <>
        <Container>
        <Form>
          <InputGroup className='my-3'>
            <Form.Control
            onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Product">
            </Form.Control>
          </InputGroup>
        </Form>
        <Row xs={1} md={4} className="g-4 my-3">
          {products
          .filter((product) => {
            return search.toLowerCase() === '' ? product : product.title.toLowerCase()
            .includes(search)
          })
         .map((product) => (
            <Col className="g-2">
              <Product key={product.id} product={product} deleteProduct={deleteProduct} />
            </Col>
          ))}

        </Row>
      </Container>
      </>
    )
}

export default Dashboard;