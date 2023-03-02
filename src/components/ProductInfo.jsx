import "./Product.css";
import { useLoaderData } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import { alignPropType } from "react-bootstrap/esm/types";
function ProductInfo() {
    const { product } = useLoaderData();
    let { title, description, price, image } = product;
    return (
        <Container>
        <Card style={{ width: '40rem'}}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Card.Text>{description}</Card.Text>          
        </Card.Body>
      </Card>
      </Container>
    )
}
export default ProductInfo