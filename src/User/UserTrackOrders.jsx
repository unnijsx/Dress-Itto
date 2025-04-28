import React, { useState } from 'react';
import { Box, Typography, Stepper, Step, StepLabel, Container, Button, Card, CardContent, Divider, TextField } from '@mui/material';
import Header from './Header';
import LoggedoutSidemenu from './Sidemenu';

const steps = [
  'Order Placed',
  'Packed',
  'Shipped',
  'Out for Delivery',
  'Delivered',
];

const order = {
  productName: 'Floral Summer Dress',
  quantity: 2,
  deliveryAddress: {
    name: 'Aanya Sharma',
    street: '123 Rosewood Lane',
    city: 'Mumbai',
    state: 'Maharashtra',
    postalCode: '400001',
    phone: '+91 9876543210',
  },
};

export default function UserTrackOrderPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [feedback, setFeedback] = useState('');

  const currentStep = 2; // "Shipped"

  const handleFeedbackSubmit = () => {
    if (feedback.trim() === '') {
      alert('Please enter your feedback before submitting!');
      return;
    }
    console.log('Feedback submitted:', feedback);
    alert('Thank you for your feedback!');
    setFeedback(''); // Clear the field
  };

  return (
    <Box sx={{ backgroundColor: '#121212', minHeight: '100vh', overflowX: 'hidden', minWidth: '99vw' }}>
      <Header toggleDrawer={() => setDrawerOpen(true)} />
      <LoggedoutSidemenu open={drawerOpen} toggleDrawer={() => setDrawerOpen(false)} />
      
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" align="center" color="white" gutterBottom>
          Track Your Order
        </Typography>

        {/* Stepper for order progress */}
        <Stepper activeStep={currentStep} alternativeLabel sx={{ mt: 4 }}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                StepIconProps={{
                  sx: {
                    color: index <= currentStep ? 'secondary.main' : 'grey.500',
                  }
                }}
              >
                <Typography color={index <= currentStep ? 'white' : 'grey.500'}>
                  {label}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Current Status */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h6" color="white" gutterBottom>
            Current Status: <span style={{ color: '#f50057' }}>{steps[currentStep]}</span>
          </Typography>
        </Box>

        {/* Order Details */}
        <Card sx={{ backgroundColor: '#1e1e1e', mt: 6, p: 2 }}>
          <CardContent>
            <Typography variant="h5" color="white" gutterBottom>
              Order Details
            </Typography>

            <Divider sx={{ backgroundColor: 'grey.800', my: 2 }} />

            <Typography variant="subtitle1" color="gray">
              Product: <span style={{ color: 'white' }}>{order.productName}</span>
            </Typography>
            <Typography variant="subtitle1" color="gray">
              Quantity: <span style={{ color: 'white' }}>{order.quantity}</span>
            </Typography>

            <Divider sx={{ backgroundColor: 'grey.800', my: 2 }} />

            <Typography variant="h6" color="white" gutterBottom>
              Delivery Address
            </Typography>

            <Typography variant="subtitle2" color="gray">
              {order.deliveryAddress.name}
            </Typography>
            <Typography variant="subtitle2" color="gray">
              {order.deliveryAddress.street}
            </Typography>
            <Typography variant="subtitle2" color="gray">
              {order.deliveryAddress.city}, {order.deliveryAddress.state} - {order.deliveryAddress.postalCode}
            </Typography>
            <Typography variant="subtitle2" color="gray">
              Phone: {order.deliveryAddress.phone}
            </Typography>
          </CardContent>
        </Card>

        {/* Feedback Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" color="white" gutterBottom>
            Send Feedback
          </Typography>

          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            variant="filled"
            InputProps={{ style: { color: 'white' } }}
            InputLabelProps={{ style: { color: 'grey' } }}
            sx={{ backgroundColor: '#1e1e1e', borderRadius: 2 }}
          />

          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleFeedbackSubmit}
            >
              Send Feedback
            </Button>
          </Box>
        </Box>

        {/* Continue Shopping Button */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button variant="outlined" color="secondary">
            Continue Shopping
          </Button>
        </Box>

      </Container>
    </Box>
  );
}
