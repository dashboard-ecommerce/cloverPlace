/* import { useState } from 'react';
import { productHandler } from '../handlers/productHandler';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

const CreateProduct = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(null);
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result);
        };
    };

    const handleTitleChange = (event) => {
        let titleInput = event.target.value;
        setTitle(titleInput);
    };
    const handleDescriptionChange = (event) => {
        let descriptionInput = event.target.value;
        setDescription(descriptionInput);
    };
    const handlePriceChange = (event) => {
        let priceInput = event.target.value;
        setPrice(priceInput);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let newProduct = {title, description, price, image};
        productHandler.addProduct(newProduct);
    };

    return (
       
        
           
             <Box md={{ flexGrow: 2 }}> 
             <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12,}}>
             <Container maxWidth="sm" >
            <form onSubmit={handleSubmit}>
        
            <Grid item xs={2} sm={4} md={4}>
            <label htmlFor="image">Image</label>
            <input type="file" onChange={handleImageChange} />
            </Grid>
             <Grid item xs={2} sm={4} md={4}>
            <label htmlFor="title">Title</label>
            <input name="title" type="text" onChange={handleTitleChange} />
            </Grid>
             <Grid itemxs={2} sm={4} md={4}>
            <label htmlFor="description">Description</label>
            <input name="description" type="text" onChange={handleDescriptionChange} />
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
            <label htmlFor="price">Price</label>
            <input name="price" type="text" onChange={handlePriceChange}/>
            </Grid>
             
            <button type="submit">
                Upload
            </button>
           
        </form>
        </Container>
       </Grid>
       </Box>
       
        
    );
};

export default CreateProduct;
 */



/* import { useState } from 'react';
import { productHandler } from '../handlers/productHandler';
import { Link } from 'react-router-dom';

const CreateProduct = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(null);
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result);
        };
    };

    const handleTitleChange = (event) => {
        let titleInput = event.target.value;
        setTitle(titleInput);
    };
    const handleDescriptionChange = (event) => {
        let descriptionInput = event.target.value;
        setDescription(descriptionInput);
    };
    const handlePriceChange = (event) => {
        let priceInput = event.target.value;
        setPrice(priceInput);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let newProduct = {title, description, price, image};
        productHandler.addProduct(newProduct);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="image">Image</label>
            <input type="file" onChange={handleImageChange} />
            <label htmlFor="title">Title</label>
            <input name="title" type="text" onChange={handleTitleChange} />
            <label htmlFor="description">Description</label>
            <input name="description" type="text" onChange={handleDescriptionChange} />
            <label htmlFor="price">Price</label>
            <input name="price" type="text" onChange={handlePriceChange}/>
            <Link className="edit--link" to={`/products`}>
            <button type="submit">
                Upload
            </button>
            </Link>
        </form>
    );
};

export default CreateProduct; 

 */


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { productHandler } from '../handlers/productHandler';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';



function CreateProduct() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(null);
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result);
        };
    };

    const handleTitleChange = (event) => {
        let titleInput = event.target.value;
        setTitle(titleInput);
    };
    const handleDescriptionChange = (event) => {
        let descriptionInput = event.target.value;
        setDescription(descriptionInput);
    };
    const handlePriceChange = (event) => {
        let priceInput = event.target.value;
        setPrice(priceInput);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let newProduct = { title, description, price, image };
        console.log(newProduct)
        await productHandler.addProduct(newProduct);
        setTimeout(
            () => {
                window.location.href="/products"
            }
        ,1000)

    };

    return (


        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label >Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" name="title" /* value={titleInput} */ onChange={handleTitleChange} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label >Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" name="description" /*  value={ descriptionInput} */ onChange={handleDescriptionChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="price">
                    <Form.Label >price</Form.Label>
                    <Form.Control type="text" placeholder="Price" name="price"  /* value={priceInput} */ onChange={handlePriceChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="image">
                    <Form.Label >Image</Form.Label>
                    <input type="file" /* value={file} */ onChange={handleImageChange} />
                </Form.Group>"

               

                    <Button variant="primary" type="submit"  >
                        Upload
                    </Button>
               
            </Form>
        </Container>
    );
}

export default CreateProduct;



/* import { useState } from 'react';
import { productHandler } from '../handlers/productHandler';
import { Link } from 'react-router-dom';

const CreateProduct = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(null);
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result);
        };
    };

    const handleTitleChange = (event) => {
        let titleInput = event.target.value;
        setTitle(titleInput);
    };
    const handleDescriptionChange = (event) => {
        let descriptionInput = event.target.value;
        setDescription(descriptionInput);
    };
    const handlePriceChange = (event) => {
        let priceInput = event.target.value;
        setPrice(priceInput);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let newProduct = {title, description, price, image};
        productHandler.addProduct(newProduct);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="image">Image</label>
            <input type="file" onChange={handleImageChange} />
            <label htmlFor="title">Title</label>
            <input name="title" type="text" onChange={handleTitleChange} />
            <label htmlFor="description">Description</label>
            <input name="description" type="text" onChange={handleDescriptionChange} />
            <label htmlFor="price">Price</label>
            <input name="price" type="text" onChange={handlePriceChange}/>
            <Link className="edit--link" to={`/products`}>
            <button type="submit">
                Upload
            </button>
            </Link>
        </form>
    );
};

export default CreateProduct; */