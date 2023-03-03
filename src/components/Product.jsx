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
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { Container } from "@mui/system";
import { FaBeer } from "react-icons/fa";




function Product({ product, deleteProduct }) {

    const { id, title, price, image, description } = product;

    return (
        <Container>
     
        <Card >
        <Link className="text-muted" href="/products/${product.id}" to ={`/products/${product.id}`}>
        <Card.Img variant="top" src={image} />
        </Link>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Card.Text>{description}</Card.Text>  
        </Card.Body>
        <Card.Body>
        <Card.Text>
        
        </Card.Text>
        
        <Link href="/editProduct/${product.id}"  to ={`/editProduct/${product.id}`}><FaBeer />Edit</Link>
     
        <Link href="#" className="link-danger" onClick={() => deleteProduct(id)}> <FcEmptyTrash/>? Delete</Link>
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
