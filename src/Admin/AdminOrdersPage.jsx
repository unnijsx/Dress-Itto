import React from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Chip,
  Button,
} from '@mui/material';
import AdminHeader from './AdminHeader';
import Sidemenu from './AdminSidemenu';
import { Link } from 'react-router-dom';

const orders = [
  {
    id: 'ORD001',
    user: 'John Doe',
    date: '2025-04-20',
    total: 119.99,
    status: 'Delivered',
  },
  {
    id: 'ORD002',
    user: 'Jane Smith',
    date: '2025-04-21',
    total: 89.5,
    status: 'Pending',
  },
  {
    id: 'ORD003',
    user: 'Sam Wilson',
    date: '2025-04-19',
    total: 150.0,
    status: 'Delivered',
  },
];

export default function AdminOrdersPage() {
  return (
    <Container
      sx={{
        py: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: '#121212',
      }}
    >
      <AdminHeader />
      <Sidemenu />

      <Typography variant="h4" color="white" gutterBottom>
        All Orders
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: '#1e1e1e',
          width: '100%',
          maxWidth: '1000px',
          mt: 3,
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#90caf9' }}>Order ID</TableCell>
              <TableCell sx={{ color: '#90caf9' }}>User</TableCell>
              <TableCell sx={{ color: '#90caf9' }}>Date</TableCell>
              <TableCell sx={{ color: '#90caf9' }}>Total ($)</TableCell>
              <TableCell sx={{ color: '#90caf9' }}>Status</TableCell>
              <TableCell sx={{ color: '#90caf9' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow
                key={order.id}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#2a2a2a' : '#1e1e1e',
                }}
              >
                <TableCell sx={{ color: 'white' }}>{order.id}</TableCell>
                <TableCell sx={{ color: 'white' }}>{order.user}</TableCell>
                <TableCell sx={{ color: 'white' }}>{order.date}</TableCell>
                <TableCell sx={{ color: 'white' }}>${order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Chip
                    label={order.status}
                    color={order.status === 'Delivered' ? 'success' : 'warning'}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Link to="/adminorderdetails" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outlined"
                    size="small"
                    color="secondary"
                    sx={{
                      textTransform: 'none',
                      borderColor: '#90caf9',
                      color: '#90caf9',
                      '&:hover': {
                        backgroundColor: '#90caf9',
                        color: 'black',
                      },
                    }}
                  >
                    View Details
                  </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
