/* import { useLoaderData } from "react-router-dom"
import { useState } from "react";
import { productHandler } from "../handlers/productHandler";
import Product from '../components/Product'
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
        {productsData.map((product) => (
            <Product key={product.id} product={product} deleteProduct={deleteProduct} />
        ))}
      </>
    )
}

export default Dashboard;
 */

import { useLoaderData } from "react-router-dom"
import { useState } from "react";
import { productHandler } from "../handlers/productHandler";
import Product from '../components/Product'
import './Dashboard.css'
import { Grid } from '@mui/material';


function Dashboard() {
    const { products } = useLoaderData();
    const [productsData, setProductsData] = useState(products);

    const deleteProduct = async (id) => {
      await productHandler.deleteProduct(id);
      setProductsData(productsData.filter(product => product.id !== id))
  }

    return (
       
        <Grid container >
        {productsData.map((product) => (
          <Grid  xs="auto" key={product.id}>
            <Product key={product.id} product={product} deleteProduct={deleteProduct} />
            </Grid>
        ))}
        </Grid>
     
    )
}

export default Dashboard;