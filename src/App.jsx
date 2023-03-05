import { useEffect, useState } from 'react'
import { productHandler } from './handlers/productHandler';
import Product from './components/Product'
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'
import { InputGroup } from 'react-bootstrap';

function App() {
  let [products, setProducts] = useState([]);
  

  const fetchProducts = async () => {
    let data = await productHandler.loadProducts();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <>
  
      {products.map(product => {
        return (
          <Product key={product.id} data={[product.title, product.description, product.price]} />
        )
      })}
    </>
  )
}

export default App
