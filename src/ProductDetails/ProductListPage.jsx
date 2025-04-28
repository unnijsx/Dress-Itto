import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  MenuItem,
  Select,
  Pagination,
} from '@mui/material';
import { Link } from 'react-router-dom';
import LoggedoutHeader from '../Header/LoggedoutHeader';
import LoggedoutSidemenu from '../Sidemenu/LoggedoutSidemenu';

const sampleProducts = Array.from({ length: 35 }, (_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  description: 'A nice fashion item you’ll love.',
  image: 'https://8upload.com/image/68035fbc131ab/vecteezy_woman-shopping-for-clothes-retail-therapy-fashion-choices_54715677.png',
  price: Math.floor(Math.random() * 1000 + 100),
}));

export default function ProductListPage() {
  const [sortBy, setSortBy] = useState('');
  const [page, setPage] = useState(1);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const sortedProducts = [...sampleProducts].sort((a, b) => {
    if (sortBy === 'lowToHigh') return a.price - b.price;
    if (sortBy === 'highToLow') return b.price - a.price;
    return 0;
  });

  const itemsPerPage = 12;
  const paginated = sortedProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box sx={{ backgroundColor: '#121212', minHeight: '100vh', py: 4 ,minWidth:'99vw'}}>
        <LoggedoutHeader/>
        <LoggedoutSidemenu/>
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
            py: 5,
          }}
        >
          <Typography variant="h4" color="white">
            All Products
          </Typography>
          <Select
            value={sortBy}
            onChange={handleSortChange}
            variant="outlined"
            size="small"
            label="Sort by"
            sx={{
              color: 'white',
              borderColor: 'white',
              backgroundColor: '#1e1e1e',
              '.MuiOutlinedInput-notchedOutline': { borderColor: '#555' },
              '& .MuiSvgIcon-root': { color: 'white' },
            }}
          >
            <MenuItem value="" selected >Sort by</MenuItem>
            <MenuItem value="lowToHigh">Price: Low to High</MenuItem>
            <MenuItem value="highToLow">Price: High to Low</MenuItem>
          </Select>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {paginated.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                component={Link}
                to={`/product`}
                sx={{
                  textDecoration: 'none',
                  backgroundColor: '#1e1e1e',
                  color: 'white',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'scale(1.03)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    height: 180,
                    objectFit: 'contain',
                    pt: 2,
                    background:
                      'radial-gradient(ellipse at center, #ffffff22 0%, transparent 70%)',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ color: 'white', mb: 1 }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    color="gray"
                    sx={{ minHeight: '3em' }}
                  >
                    {product.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="secondary"
                    align="center"
                    sx={{ mt: 2 }}
                  >
                    ₹{product.price}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      fullWidth
                      sx={{ textTransform: 'none', fontWeight: 'bold' }}
                    >
                      View Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <Pagination
            count={Math.ceil(sampleProducts.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="secondary"
            sx={{
              '.MuiPaginationItem-root': {
                color: 'white',
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
