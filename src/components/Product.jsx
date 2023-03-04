import "./Product.css";
/* import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'; */
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
                    <Link href="#" className="link-danger ms-5"onClick={() => deleteProduct(id)}><BsTrash3 size={20} /></Link>
                </Card.Link>
                </Card.Body>
            </Card>

        </Container>
    )
}

export default Product




/* import "./Product.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';


function Product({ product, deleteProduct }) {

    const { id, title, price, image } = product;

    return (
        <CardGroup>
             <Card>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title} - price: {price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => deleteProduct(id)}><DeleteIcon fontSize="large" />Delete</Button>
                <Link className="edit--link" to={`/editProduct/${product.id}`}>
                    <Button size="small"><EditIcon fontSize="large" color="inherit" />Edit</Button>
                </Link>
            </CardActions>
            <CardActions>
                <Link className="edit--link" to={`/products/${product.id}`}>
                    <Button size="small">More info</Button>
                </Link>
            </CardActions>
        </Card>
        </Card>
        </CardGroup>
    )
}

export default Product */
