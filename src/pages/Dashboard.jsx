import { useLoaderData } from "react-router-dom"
import { useState, useMemo, useEffect } from "react";
import { productHandler } from "../handlers/productHandler";
import Product from '../components/Product'
import './Dashboard.css'
import { Container } from "react-bootstrap";
import { handleSearch} from '../components/Navbar';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
         <Row xs={1} md={4} className="g-4">
    
        {productsData.map((product) => (
          <Col  className="g-2">
            <Product key={product.id} product={product} deleteProduct={deleteProduct} />
          </Col>
        ))}
         
        </Row>
        </Container>
      </>
    )
}

export default Dashboard;