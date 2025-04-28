import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Tabs,
  Tab,
  TextField,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function UserPaymentPage() {
  const [tab, setTab] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  const handleDone = () => {
    setSnackbarOpen(true);
    setTimeout(() => navigate('/userhome'), 5000);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        minWidth: '97.5vw',
        backgroundColor: '#121212',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Paper sx={{ p: 4, width: '100%', maxWidth: 500, backgroundColor: '#1e1e1e' }}>
        <Typography variant="h5" color="white" gutterBottom>
          Choose Payment Method
        </Typography>

        <Tabs
          value={tab}
          onChange={(e, newVal) => setTab(newVal)}
          textColor="secondary"
          indicatorColor="secondary"
          sx={{ mb: 3 }}
        >
          <Tab label="UPI" />
          <Tab label="Card" />
        </Tabs>

        {tab === 0 && (
          <Box>
            <TextField
              label="UPI ID"
              variant="outlined"
              fullWidth
              sx={{ mb: 3, input: { color: 'white' }, label: { color: '#aaa' } }}
            />
          </Box>
        )}

        {tab === 1 && (
          <Box>
            <TextField
              label="Card Number"
              variant="outlined"
              fullWidth
              sx={{ mb: 2, input: { color: 'white' }, label: { color: '#aaa' } }}
            />
            <TextField
              label="Expiry Date"
              variant="outlined"
              fullWidth
              sx={{ mb: 2, input: { color: 'white' }, label: { color: '#aaa' } }}
            />
            <TextField
              label="CVV"
              variant="outlined"
              type="password"
              fullWidth
              sx={{ mb: 3, input: { color: 'white' }, label: { color: '#aaa' } }}
            />
          </Box>
        )}

        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ py: 1.5, fontWeight: 'bold' }}
          onClick={handleDone}
        >
          Done
        </Button>
      </Paper>

      <Snackbar
        open={snackbarOpen}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Order Placed! Redirecting to Home...
        </Alert>
      </Snackbar>
    </Box>
  );
}
