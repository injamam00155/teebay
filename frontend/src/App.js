// ProductList.js
import React, { useState } from 'react';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ToggleBar from './components'; // Import the ToggleBar component

const myProducts = [
  { id: 1, name: 'Product 1', description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', description: 'Description for Product 2' },
  // Add more products as needed
];

const allProducts = [
  { id: 1, name: 'Product 1', description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', description: 'Description for Product 3' },
  { id: 4, name: 'Product 4', description: 'Description for Product 4' },
  // Add more products as needed
];

function ProductList() {
  const [view, setView] = useState('myProducts'); // 'myProducts' or 'allProducts'

  const handleEdit = (productId) => {
    // Implement edit functionality
    console.log(`Edit product with id ${productId}`);
  };

  const handleDelete = (productId) => {
    // Implement delete functionality
    console.log(`Delete product with id ${productId}`);
  };

  const handleAddProduct = () => {
    // Implement add product functionality
    console.log('Add Product');
  };

  const handleLogout = () => {
    // Implement logout functionality
    console.log('Logout');
  };

  const handleViewChange = (event, newView) => {
    setView(newView);
  };

  const filteredProducts = view === 'myProducts' ? myProducts : allProducts;

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Product List
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      {/* Use the ToggleBar component */}
      <ToggleBar value={view} onChange={handleViewChange} />
      <div style={{ marginTop: '20px' }}>
        {filteredProducts.map((product) => (
          <Card key={product.id} sx={{ marginBottom: '20px' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography color="text.secondary">{product.description}</Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="edit" onClick={() => handleEdit(product.id)}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete" onClick={() => handleDelete(product.id)}>
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        style={{ marginTop: '20px' }}
        onClick={handleAddProduct}
      >
        Add Product
      </Button>
    </Container>
  );
}

export default ProductList;
