import "./Product.css";
import { useLoaderData } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Container } from "@mui/system";


function ProductInfo() {
    const { product } = useLoaderData();
    let { title, description, price, image } = product;

    return (
        <Container>

            <Card border="light" className="pt-3">
                <Card.Img variant="top" src={image} style={{ height: "550px", width: "100%", objectFit: "cover" }} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{price}€</Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
            
        </Container>
    )
}
export default ProductInfo