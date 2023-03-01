

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { Dashboard } from '@mui/icons-material';
import CreateProduct from '../pages/CreateProduct';
import { Grid } from '@mui/material';

export default function NavBar() {
  return (
    <Grid container >
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" bg="dark">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CloverPlace
          </Typography>
          <Button component={Link} to="/products" color="inherit">My Products</Button>
          <Button component={Link} to="/newProduct" color="inherit">Add Product</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </Grid>
  );
}

 

 /* import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    return (
        <nav>
            <Link to="/products" className="nav--item">My products</Link>
            <Link to="/newProduct" className="nav--item">Add product</Link>
        </nav>
    )
}

export default Navbar 
 */ 