import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Stack,
} from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import AdminHeader from './AdminHeader';
import AdminSidemenu from './AdminSidemenu';
import { Link } from 'react-router-dom';

const adminStats = [
  {
    title: 'Total Profit',
    value: '$24,500',
    chart: [5, 10, 50, 15, 12, 48],
    color: '#4caf50',
  },
  {
    title: 'Products Sold',
    value: '1,230',
  },
  {
    title: 'Total Users',
    value: '540',
  },
  {
    title: 'Total Orders',
    value: '1,750',
  },
  {
    title: 'Feedback Received',
    value: '87',
  },
];

export default function AdminHome() {
  return (
    <div>
      <AdminHeader />
      <AdminSidemenu />
      <Container
        sx={{
          py: 4,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: '100vw',
          height: '100vh',
          backgroundColor: '#121212',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom color="white">
          Admin Dashboard
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
          {adminStats.map((stat) => (
            <Grid item xs={12} sm={6} md={4} key={stat.title}>
              <Card
                sx={{
                  backgroundColor: '#1e1e1e',
                  color: 'white',
                  borderRadius: 2,
                  p: 2,
                  height: 180,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {stat.title}
                </Typography>
                <Typography variant="h5" color="secondary">
                  {stat.value}
                </Typography>

                {stat.chart && (
                  <Box sx={{ mt: 1 }}>
                    <SparkLineChart
                      data={stat.chart}
                      height={50}
                      showTooltip
                      area
                      colors={[stat.color || '#90caf9']}
                      curve="natural"
                    />
                  </Box>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Button Group Section */}
        <Stack direction="row" spacing={2} sx={{ mt: 4 }} justifyContent="center">
        <Link to="/productlistcrud" passHref legacyBehavior>
          <Button variant="contained" color="secondary">
            Products
          </Button>
        </Link>
        <Link to="/adminuserlist" passHref legacyBehavior>
          <Button variant="contained" color="secondary">
            Users
          </Button></Link>
          <Link to="/adminorderspage" passHref legacyBehavior>
          <Button variant="contained" color="secondary">
            Orders
          </Button></Link>

          <Button variant="contained" color="secondary">
            Feedbacks
          </Button>
        </Stack>
      </Container>
    </div>
  );
}
