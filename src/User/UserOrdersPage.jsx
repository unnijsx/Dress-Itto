import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Chip, Button, Divider } from '@mui/material';
import Header from './Header';
import LoggedoutSidemenu from './Sidemenu';
import { Link, Links } from 'react-router-dom';

const currentOrders = [
  { id: 1, product: 'Floral Dress', status: 'Shipped', price: '499₹', image: 'https://pngimg.com/uploads/dress/dress_PNG141.png' },
  { id: 2, product: 'Men\'s Jacket', status: 'Out for Delivery', price: '899₹', image: 'https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8095.png' },
];

const previousOrders = [
  { id: 3, product: 'Kids T-shirt', status: 'Delivered', price: '299₹', image: 'https://pngcore.com/files/preview/800x800/11689172797l0z8g0xheu6b0q6kzcbpfbsjnjfg8ue91onobncxoye6jsgb0b7skaemxfq3gobkyiskivw8qsovwf6iudruijmzssww3zdrcekp.png' },
  { id: 4, product: 'Handbag', status: 'Cancelled', price: '699₹', image: 'https://www.pngall.com/wp-content/uploads/5/Fashion-Accessories-PNG-File.png' },
];

export default function UserOrdersPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Shipped':
      case 'Out for Delivery':
        return 'info';
      case 'Delivered':
        return 'success';
      case 'Cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ backgroundColor: '#121212', minHeight: '100vh', minWidth: '99vw', overflowX: 'hidden' }}>
      <Header toggleDrawer={() => setDrawerOpen(true)} />
      <LoggedoutSidemenu open={drawerOpen} toggleDrawer={() => setDrawerOpen(false)} />

      <Container sx={{ py: 4 }}>
        {/* Current Orders */}
        <Typography variant="h4" color="white" gutterBottom>
          Current Orders
        </Typography>
        <Grid container spacing={3}>
          {currentOrders.length > 0 ? (
            currentOrders.map((order) => (
              <Grid item xs={12} md={6} lg={4} key={order.id}>
                <Card sx={{ backgroundColor: '#1e1e1e', color: 'white', borderRadius: 2 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <img src={order.image} alt={order.product} style={{ width: 80, height: 80, objectFit: 'contain', marginRight: 16 }} />
                      <Box>
                        <Typography variant="h6">{order.product}</Typography>
                        <Typography variant="body2" color="gray">{order.price}</Typography>
                      </Box>
                    </Box>
                    <Chip label={order.status} color={getStatusColor(order.status)} sx={{ mb: 2 }} />
                    <Link to={'/usertrackorder'}><Button fullWidth variant="outlined" color="secondary">
                      Track Order
                    </Button></Link>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography color="gray" sx={{ mt: 2 }}>
              No current orders.
            </Typography>
          )}
        </Grid>

        <Divider sx={{ my: 5, backgroundColor: 'gray' }} />

        {/* Previous Orders */}
        <Typography variant="h4" color="white" gutterBottom>
          Previous Orders
        </Typography>
        <Grid container spacing={3}>
          {previousOrders.length > 0 ? (
            previousOrders.map((order) => (
              <Grid item xs={12} md={6} lg={4} key={order.id}>
                <Card sx={{ backgroundColor: '#1e1e1e', color: 'white', borderRadius: 2 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <img src={order.image} alt={order.product} style={{ width: 80, height: 80, objectFit: 'contain', marginRight: 16 }} />
                      <Box>
                        <Typography variant="h6">{order.product}</Typography>
                        <Typography variant="body2" color="gray">{order.price}</Typography>
                      </Box>
                    </Box>
                    <Chip label={order.status} color={getStatusColor(order.status)} sx={{ mb: 2 }} />
                    <Link to={'/product'}><Button fullWidth variant="contained" color="secondary">
                      Buy Again
                    </Button></Link>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography color="gray" sx={{ mt: 2 }}>
              No previous orders yet.
            </Typography>
          )}
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#1c1c1c',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" color="gray">
          © {new Date().getFullYear()} DressStore. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
