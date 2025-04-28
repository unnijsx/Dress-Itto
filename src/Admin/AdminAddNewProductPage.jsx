import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  MenuItem,
} from '@mui/material';
import Sidemenu from './AdminSidemenu';
import AdminHeader from './AdminHeader';

export default function AdminAddNewProductPage() {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    profit: '',
    sales: '',
    stock: '',
    image: '',
    category: '',
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct((prev) => ({ ...prev, image: reader.result }));
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduct = () => {
    console.log('New Product Added:', newProduct);
    setNewProduct({
      name: '',
      price: '',
      profit: '',
      sales: '',
      stock: '',
      image: '',
      category: '',
    });
    setPreview(null);
  };

  return (
    <Container
      sx={{
        py: 4,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '99vw',
        minHeight: '100vh',
        backgroundColor: '#121212',
      }}
    >
      <AdminHeader />
      <Sidemenu />

      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 600,
          backgroundColor: '#1e1e1e',
          borderRadius: 3,
          mt: 4,
        }}
      >
        <Typography variant="h4" color="white" gutterBottom align="center">
          Add New Product
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            mb: 3,
          }}
        >
          {preview && (
            <Box
              component="img"
              src={preview}
              sx={{
                width: '100%',
                maxWidth: 300,
                height: 'auto',
                mb: 2,
                borderRadius: 2,
                border: '2px solid #90caf9',
                backgroundColor: '#2c2c2c',
                objectFit: 'contain',
              }}
            />
          )}

          <Button variant="contained" component="label" color="secondary">
            Upload Image
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageChange}
            />
          </Button>
        </Box>

        <TextField
          fullWidth
          label="Product Name"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ style: { color: '#aaa' } }}
          InputProps={{ style: { color: 'white' } }}
          sx={{ input: { backgroundColor: '#2c2c2c' } }}
        />

        <TextField
          fullWidth
          label="Price"
          name="price"
          type="number"
          value={newProduct.price}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ style: { color: '#aaa' } }}
          InputProps={{ style: { color: 'white' } }}
          sx={{ input: { backgroundColor: '#2c2c2c' } }}
        />

        <TextField
          fullWidth
          label="Profit"
          name="profit"
          type="number"
          value={newProduct.profit}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ style: { color: '#aaa' } }}
          InputProps={{ style: { color: 'white' } }}
          sx={{ input: { backgroundColor: '#2c2c2c' } }}
        />

        <TextField
          fullWidth
          label="Sales"
          name="sales"
          type="number"
          value={newProduct.sales}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ style: { color: '#aaa' } }}
          InputProps={{ style: { color: 'white' } }}
          sx={{ input: { backgroundColor: '#2c2c2c' } }}
        />

        <TextField
          fullWidth
          label="Stock"
          name="stock"
          type="number"
          value={newProduct.stock}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ style: { color: '#aaa' } }}
          InputProps={{ style: { color: 'white' } }}
          sx={{ input: { backgroundColor: '#2c2c2c' } }}
        />

        <TextField
          fullWidth
          select
          label="Category"
          name="category"
          value={newProduct.category}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ style: { color: '#aaa' } }}
          InputProps={{ style: { color: 'white' } }}
          sx={{ input: { backgroundColor: '#2c2c2c' } }}
        >
          <MenuItem value="men">Men</MenuItem>
          <MenuItem value="women">Women</MenuItem>
          <MenuItem value="kids">Kids</MenuItem>
          <MenuItem value="accessories">Accessories</MenuItem>
        </TextField>

        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddProduct}
            sx={{
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#90caf9',
                color: 'black',
              },
            }}
          >
            Add Product
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
