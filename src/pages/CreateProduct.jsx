import { useState } from 'react';
import { productHandler } from '../handlers/productHandler';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
             
            <button type="submit">
                Upload
            </button>
         
        </form>
    );
};

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

export default CreateProduct; 

 */


/* import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { productHandler } from '../handlers/productHandler';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';


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

    const handleSubmit = (event) => {
        event.preventDefault();
        let newProduct = {title, description, price, image};
        productHandler.addProduct(newProduct);
    };

  return (
    <Container>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="title" placeholder="Enter title" onChange={handleTitleChange}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control type="description" placeholder="Description" onChange={handleDescriptionChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>price</Form.Label>
        <Form.Control type="price" placeholder="Price" onChange={handlePriceChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="image">
      <Form.Label htmlFor="image">Image</Form.Label>
            <input type="file" onChange={handleImageChange} />
        </Form.Group>"
      <Link className="edit--link" to={`/products`}>
      <Button variant="primary" type="submit">
        Upload
      </Button>
      </Link>
    </Form>
    </Container>
  );
}

export default CreateProduct; */



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