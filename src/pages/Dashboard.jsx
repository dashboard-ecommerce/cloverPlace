import { useLoaderData } from "react-router-dom"
import { useState } from "react";
import { productHandler } from "../handlers/productHandler";
import Product from '../components/Product'
import './Dashboard.css'

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
         <Row xs={1} md={4} className="g-4">
         
        {productsData.map((product) => (
          <Col>
            <Product key={product.id} product={product} deleteProduct={deleteProduct} />
            </Col>
        ))}
         
        </Row>
      </>
    )
}

export default Dashboard;