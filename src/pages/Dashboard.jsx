import { useLoaderData } from "react-router-dom"
import { useState } from "react";
import { productHandler } from "../handlers/productHandler";
import Product from '../components/Product'
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Dashboard.css'

function Dashboard() {
    const { products } = useLoaderData();
    const [productsData, setProductsData] = useState(products);

    const deleteProduct = async (id) => {
      await productHandler.deleteProduct(id);
      setProductsData(productsData.filter(product => product.id !== id))
  }

    return (
        <>
        <Container>
         <Row md={4} className="g-2">
         
        {productsData.map((product) => (
          <Col  sm={6} md={4} lg={3}>
            <Product key={product.id} product={product} deleteProduct={deleteProduct} />
          </Col>
        ))}
         
        </Row>
        </Container>
      </>
    )
}

export default Dashboard;