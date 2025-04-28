import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  Paper,
  Divider,
  Chip,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/LoggedoutHeader';
import Sidemenu from '../Sidemenu/LoggedoutSidemenu';

export default function UserProductPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [openConfirm, setOpenConfirm] = useState(false);

  const product = {
    title: 'Forks',
    price: 299,
    description:
      'A stylish and comfortable dress perfect for summer. Made with breathable fabric and available in all sizes.',
    image: '',
    delivery: 'Delivery in 3-5 business days.',
    stock: 10,
  };

  const handleBuyNow = () => {
    setOpenConfirm(true);
  };

  const handleConfirmPurchase = () => {
    console.log('Confirmed purchase:', { product, quantity });
    setOpenConfirm(false);
    // Trigger actual purchase logic here
  };

  return (
    <Box sx={{ backgroundColor: '#121212', minHeight: '100vh', minWidth: '100vw' }}>
      <Header />
      <Sidemenu />

      <Grid container spacing={4} justifyContent="center" sx={{ py: 10, px: 3 }}>
        {/* Product Image */}
        <Grid item xs={12} md={5}>
          <Paper
            elevation={8}
            sx={{
              p: 2,
              backgroundColor: '#1e1e1e',
              borderRadius: 3,
              textAlign: 'center',
            }}
          >
            <Box
              component="img"
              src={product.image || 'https://via.placeholder.com/400x400?text=Product+Image'}
              alt={product.title}
              sx={{
                width: '100%',
                maxHeight: 400,
                objectFit: 'contain',
                borderRadius: 2,
                background: 'radial-gradient(ellipse at center, #ffffff22 0%, transparent 70%)',
              }}
            />
          </Paper>
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              backgroundColor: '#1e1e1e',
              borderRadius: 3,
            }}
          >
            <Typography variant="h4" gutterBottom color="white">
              {product.title}
            </Typography>
            <Typography variant="h5" color="#90caf9" gutterBottom>
              ₹{product.price}
            </Typography>

            <Divider sx={{ my: 2, backgroundColor: '#333' }} />

            <Typography variant="body1" color="#ccc" paragraph>
              {product.description}
            </Typography>

            <Chip label={product.delivery} sx={{ backgroundColor: '#333', color: '#fff' }} />
            <Typography variant="body2" color="#888" sx={{ mt: 1 }}>
              Stock available: {product.stock}
            </Typography>

            <TextField
              label="Quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              InputProps={{ inputProps: { min: 1, max: product.stock } }}
              sx={{
                mt: 3,
                mb: 3,
                width: 120,
                '& input': { color: 'white' }, // White text color
                '& label': { color: '#aaa' },
              }}
            />

            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ py: 1.5, fontWeight: 'bold' }}
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Confirmation Dialog */}
      <Dialog open={openConfirm} onClose={() => setOpenConfirm(false)}>
        <DialogTitle>Confirm Purchase</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure to continue purchase {quantity} {product.title}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirm(false)} color="inherit">
            Cancel
          </Button>
          <Link to="/userpayment" style={{ textDecoration: 'none' }}>
          <Button onClick={handleConfirmPurchase} variant="contained" color="secondary">
            Confirm
          </Button></Link>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
