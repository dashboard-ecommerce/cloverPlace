/* import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function CreateProduct() {



    
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get('title'),
      description: data.get('description'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Añade tu producto
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="title"
                  required
                  fullWidth
                  id="title"
                  label="title"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="description"
                  name="description"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="price "
                  name="price"
                  autoComplete="price"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to upload my product, and I aceept terms and conditions."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Upload
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              <Item htmlFor="image">Image</Item>
              <Item type="file" onChange={handleImageChange} />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
} */


 import { useState } from 'react';
import { productHandler } from '../handlers/productHandler';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import {  createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

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
        <ThemeProvider theme={theme}>
        <Container spacing={2} >
        <Box sx={{ mt: 3 }}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <form onSubmit={handleSubmit}>
        <Grid item xs={12}>
            <label htmlFor="image">Image</label>
            <input type="file" onChange={handleImageChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
            <label htmlFor="title">Title</label>
            <input name="title" type="text" onChange={handleTitleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <label htmlFor="description">Description</label>
            <input name="description" type="text" onChange={handleDescriptionChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <label htmlFor="price">Price</label>
            <input name="price" type="text" onChange={handlePriceChange}/>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Link className="edit--link" to={`/products`}>
            <button type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
                Upload
            </button>
            </Link>
            </Grid>
        </form>
        </Box>
        </Container>
        </ThemeProvider>
    );
};

export default CreateProduct; 