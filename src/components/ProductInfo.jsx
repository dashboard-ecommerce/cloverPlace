import "./Product.css";
/* import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'; */
import { useLoaderData } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
function ProductInfo() {
    const { product } = useLoaderData();
    let { title, description, price, image } = product;
    return (
        <Container>
      
        <Card border="light" className="pt-3">
        <Card.Img variant="top" src={image} style={{ height: "550px", width:"100%", objectFit: "cover" }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{price}€</Card.Subtitle>
          <Card.Text>{description}</Card.Text>         
        </Card.Body>
      </Card>  
     
      </Container>
       /*  {/* <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}

                image={image}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title} - price: {price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>  */
    )
}
export default ProductInfo