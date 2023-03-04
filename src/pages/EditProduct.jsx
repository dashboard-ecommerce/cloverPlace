import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function EditProduct() {
    const { product } = useLoaderData();
    const id = product.id;
    const [title, setTitle] = useState(product.title);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [image, setImage] = useState(product.image);

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
        let updatedProduct = { title, description, price, image };
        productHandler.updateProduct(id, updatedProduct);
        setTimeout(
            () => {
                window.location.href = "/products"
            }
            , 1000)
    };

    return (
        <>
            <Container className="mx-auto">
                <h1 align="center" style={{ fontSize: '40px', color: "green" }}>
                    You are editing this Product : {product.title}
                </h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder={product.title} name="title"  onChange={handleTitleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label >Description</Form.Label>
                        <Form.Control type="text" placeholder={product.description} name="description"  onChange={handleDescriptionChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label >Price</Form.Label>
                        <Form.Control type="text" placeholder={product.price} name="price"  onChange={handlePriceChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="image">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" className="my-form-control" onChange={handleImageChange} />
                    </Form.Group>
                    <Button variant="success" type="submit"  >
                        Upload
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default EditProduct;