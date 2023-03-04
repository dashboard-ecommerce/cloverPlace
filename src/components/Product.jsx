import "./Product.css";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Container } from "@mui/system";
import { BsTrash3 } from "react-icons/Bs";
import { TfiPencilAlt } from "react-icons/Tfi";


function Product({ product, deleteProduct }) {

    const { id, title, price, image, description } = product;

    return (
        <Container>

            <Card border="light" >
                <Link href="/products/${product.id}" to={`/products/${product.id}`}>
                    <Card.Img top width="100%"
                        variant="top"
                        src={image}
                        className="img-fluid"
                        style={{ height: "200px", objectFit: "cover" }} />
                </Link>

                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{price}€</Card.Subtitle>
                    <Card.Text >{description}</Card.Text>

                    <Card.Link className="ms-5">
                        <Link href="/editProduct/${product.id}" className="link-success ms-4" to={`/editProduct/${product.id}`}><TfiPencilAlt size={20} /></Link>
                        <Link href="#" className="link-danger ms-5" onClick={() => deleteProduct(id)}><BsTrash3 size={20} /></Link>
                    </Card.Link>
                </Card.Body>
            </Card>

        </Container>
    )
}

export default Product

