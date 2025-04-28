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

export default function AdminProductDetails() {
  const [product, setProduct] = useState({
    name: 'Red Dress',
    price: 49.99,
    profit: 15.5,
    sales: 120,
    stock: 25, // Added stock here
    image: '',
    category: 'men',
  });
  

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct((prev) => ({ ...prev, image: reader.result }));
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = () => {
    console.log('Updated Product:', product);
  };

  const handleDelete = () => {
    console.log('Product Deleted:', product.name);
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
          Update Product
        </Typography>

        {/* Image Upload and Preview */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            mb: 3,
          }}
        >
          <Box
            component="img"
            src={
              preview ||
              'https://w7.pngwing.com/pngs/972/557/png-transparent-blue-dress-shirt-t-shirt-dress-shirt-dress-shirt-tshirt-blue-image-file-formats-thumbnail.png'
            }
            alt="Product Preview"
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
          value={product.name}
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
          value={product.price}
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
          value={product.profit}
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
          value={product.sales}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ style: { color: '#aaa' } }}
          InputProps={{
            sx: { backgroundColor: '#2c2c2c' },
            style: { color: 'white' }
          }}
                  />
<TextField
  fullWidth
  label="Stock"
  name="stock"
  type="number"
  value={product.stock}
  onChange={handleChange}
  margin="normal"
  InputLabelProps={{ style: { color: '#aaa' } }}
  InputProps={{
    sx: { backgroundColor: '#2c2c2c' },
    style: { color: 'white' }
  }}
/>

        {/* Category Selector */}
        <TextField
          fullWidth
          select
          label="Category"
          name="category"
          value={product.category}
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

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleUpdate}
            sx={{
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#90caf9',
                color: 'black',
              },
            }}
          >
            Update
          </Button>

          <Button
            variant="outlined"
            color="error"
            onClick={handleDelete}
            sx={{ textTransform: 'none' }}
          >
            Delete
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
