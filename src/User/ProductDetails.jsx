import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Paper } from '@mui/material';

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = () => {
    // Implement buy now functionality
    console.log('Buy Now clicked:', { ...product, quantity });
  };

  if (!product) {
    return (
      <Paper sx={{ p: 4 }}>
        <Typography variant="h6">Loading product details...</Typography>
      </Paper>
    );
  }

  return (
    <Paper sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box
        component="img"
        src={product.image}
        alt={product.name}
        sx={{
          width: '100%',
          maxHeight: 400,
          objectFit: 'cover',
          borderRadius: 2,
        }}
      />

      <Typography variant="h4">{product.name}</Typography>
      <Typography variant="body1">{product.description}</Typography>
      <Typography variant="h6">Price: ₹{product.price}</Typography>
      <Typography variant="body2">Stock: {product.stock}</Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        <TextField
          label="Quantity"
          type="number"
          InputProps={{ inputProps: { min: 1, max: product.stock } }}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          sx={{ width: 100, mr: 2 }}
        />
        <Button variant="contained" onClick={handleBuyNow}>
          Buy Now
        </Button>
      </Box>
    </Paper>
  );
};

export default ProductDetails;
