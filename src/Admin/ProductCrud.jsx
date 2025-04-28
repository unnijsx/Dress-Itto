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
  Button,
  Box,
  Avatar,
} from '@mui/material';
import Sidemenu from './AdminSidemenu';
import AdminHeader from './AdminHeader';
import { Link } from 'react-router-dom';

const productData = [
  {
    name: 'Red Dress',
    price: 49.99,
    profit: 15.5,
    sales: 120,
    stock: 25,
    image: 'https://via.placeholder.com/80x100?text=Red+Dress',
    category: 'women',
  },
  {
    name: 'Blue Skirt',
    price: 39.99,
    profit: 12.0,
    sales: 85,
    stock: 18,
    image: 'https://via.placeholder.com/80x100?text=Blue+Skirt',
    category: 'women',
  },
  {
    name: 'Leather Jacket',
    price: 99.99,
    profit: 35.0,
    sales: 60,
    stock: 8,
    image: 'https://via.placeholder.com/80x100?text=Jacket',
    category: 'men',
  },
  {
    name: 'Summer Top',
    price: 25.0,
    profit: 8.0,
    sales: 150,
    stock: 42,
    image: 'https://via.placeholder.com/80x100?text=Top',
    category: 'women',
  },
  {
    name: 'Denim Jeans',
    price: 59.99,
    profit: 20.0,
    sales: 90,
    stock: 30,
    image: 'https://via.placeholder.com/80x100?text=Jeans',
    category: 'men',
  },
  {
    name: 'Black Heels',
    price: 70.0,
    profit: 25.0,
    sales: 45,
    stock: 12,
    image: 'https://via.placeholder.com/80x100?text=Heels',
    category: 'accessories',
  },
];


export default function ProductCrud() {
  return (
    <Container
      sx={{
        py: 10,
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

      {/* Title + Add Button */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
          width: '100%',
          maxWidth: '1000px',
        }}
      >
        <Typography variant="h4" color="white">
          Product List
        </Typography>
        <Link to="/adminaddnewproduct" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            textTransform: 'none',
            width: '150px',
            '&:hover': {
              backgroundColor: '#90caf9',
              color: 'black',
            },
          }}
        >
          Add Product
        </Button>
        </Link>
      </Box>

      {/* Product Table */}
      <TableContainer
        component={Paper}
        sx={{ backgroundColor: '#1e1e1e', width: '100%', maxWidth: '1000px' }}
      >
        <Table>
        <TableHead>
        <TableRow>
          <TableCell sx={{ color: '#90caf9' }}>Image</TableCell>
          <TableCell sx={{ color: '#90caf9' }}>Product Name</TableCell>
          <TableCell sx={{ color: '#90caf9' }}>Price ($)</TableCell>
          <TableCell sx={{ color: '#90caf9' }}>Profit ($)</TableCell>
          <TableCell sx={{ color: '#90caf9' }}>Sales</TableCell>
          <TableCell sx={{ color: '#90caf9' }}>Stock</TableCell> {/* New */}
          <TableCell sx={{ color: '#90caf9' }}>Category</TableCell>
          <TableCell sx={{ color: '#90caf9' }}>Action</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
  {productData.map((product, index) => (
    <TableRow
      key={product.name}
      sx={{
        backgroundColor: index % 2 === 0 ? '#2a2a2a' : '#1e1e1e',
      }}
    >
      <TableCell>
        <Avatar
          src={product.image}
          alt={product.name}
          variant="rounded"
          sx={{ width: 60, height: 80 }}
        />
      </TableCell>
      <TableCell sx={{ color: 'white' }}>{product.name}</TableCell>
      <TableCell sx={{ color: 'white' }}>{product.price.toFixed(2)}</TableCell>
      <TableCell sx={{ color: 'white' }}>{product.profit.toFixed(2)}</TableCell>
      <TableCell sx={{ color: 'white' }}>{product.sales}</TableCell>
      <TableCell sx={{ color: 'white' }}>{product.stock}</TableCell> {/* New */}
      <TableCell sx={{ color: 'white' }}>{product.category}</TableCell>
      <TableCell>
        <Link to={`/adminproductdetails`} style={{ textDecoration: 'none' }}>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
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
            View More
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
