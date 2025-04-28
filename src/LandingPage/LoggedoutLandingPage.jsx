import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import LoggedoutSidemenu from '../Sidemenu/LoggedoutSidemenu';
import Header from '../Header/LoggedoutHeader';

const categories = [
  { title: 'Women', image: 'https://8upload.com/image/68035fbc131ab/vecteezy_woman-shopping-for-clothes-retail-therapy-fashion-choices_54715677.png' },
  { title: 'Men', image: 'https://www.pngmart.com/files/22/Men-Fashion-PNG-HD-Isolated.png' },
  { title: 'Kids', image: 'https://www.pngmart.com/files/23/Kids-Wear-PNG-Image.png' },
  { title: 'Accessories', image: 'https://www.pngall.com/wp-content/uploads/5/Fashion-Accessories-PNG-File.png' },
];

const featured = [
  { title: 'Forks', image: 'https://pngimg.com/uploads/dress/dress_PNG141.png', price: '299' },
  { title: 'Top picks for you', image: 'https://pngimg.com/uploads/dress/dress_PNG16.png', price: '299' },
  { title: '90"s Fashion', image: 'https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8095.png', price: '299' },
  { title: 'Kids Tshirts', image: 'https://pngcore.com/files/preview/800x800/11689172797l0z8g0xheu6b0q6kzcbpfbsjnjfg8ue91onobncxoye6jsgb0b7skaemxfq3gobkyiskivw8qsovwf6iudruijmzssww3zdrcekp.png', price: '299' },
  { title: 'Forks', image: 'https://pngimg.com/uploads/dress/dress_PNG141.png', price: '299' },
  { title: 'Top picks for you', image: 'https://pngimg.com/uploads/dress/dress_PNG16.png', price: '299' },
  { title: '90"s Fashion', image: 'https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8095.png', price: '299' },
  { title: 'Kids Tshirts', image: 'https://pngcore.com/files/preview/800x800/11689172797l0z8g0xheu6b0q6kzcbpfbsjnjfg8ue91onobncxoye6jsgb0b7skaemxfq3gobkyiskivw8qsovwf6iudruijmzssww3zdrcekp.png', price: '299' },
];

const carouselData = [
  { title: 'Discover Your Style', subtitle: 'Trendy outfits for everyone. Shop now.', image: 'https://imgs.search.brave.com/kqOGn8rQ8HWofsdaA1P1AOiC3ej-Dt8Nuk3LQaf9uIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4Lzg3LzU1LzE4/LzM2MF9GXzg4NzU1/MTgxMV9xTGNlaks4/OFlvbWh0eWpoZEtv/VXRDZWFMbWpTazBF/ci5qcGc' },
  { title: 'Unleash Elegance', subtitle: 'New arrivals for every season.', image: 'https://imgs.search.brave.com/oYfbWioCetkIaFnypLDH6DdjMsEFZ524WeLKqItez-I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDY5MTEw/NTAuanBn' },
  { title: 'Fashion for All', subtitle: 'Stylish, affordable, and timeless.', image: 'https://imgs.search.brave.com/8X3dMNd1v8Knj0xs2Ezm5HI40cUs6bxHNKy7kuGuqiE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDY1NDI4/NzEuanBn' },
  { title: 'Complete the Look', subtitle: 'Accessories to match your outfit.', image: 'https://imgs.search.brave.com/YS437eYWlpAkqQO5sBf4ZcVWo7Imy4Xh_xMCbzx0Oek/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY2hyaXN0bWFz/LWNvbGxhZ2Utengx/Z3R3aWIxdmtuNmJ2/Zi5qcGc' },
];

// Same imports and data declarations

export default function LandingPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ backgroundColor: '#121212', minHeight: '100vh', overflowX: 'hidden' ,minWidth: '99vw'}}>
      <Header toggleDrawer={() => setDrawerOpen(true)} />
      <LoggedoutSidemenu open={drawerOpen} toggleDrawer={() => setDrawerOpen(false)} />

      {/* Carousel */}
      <Box
        sx={{
          height: isMobile ? '50vh' : '80vh',
          width: '100%',
          backgroundImage: `url(${carouselData[currentSlide].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: '#fff',
            textAlign: 'center',
            px: 2,
          }}
        >
          <Typography variant={isMobile ? 'h5' : 'h3'} gutterBottom>
            {carouselData[currentSlide].title}
          </Typography>
          <Typography variant={isMobile ? 'body1' : 'h6'} gutterBottom>
            {carouselData[currentSlide].subtitle}
          </Typography>
          <Button variant="contained" color="secondary" size={isMobile ? 'medium' : 'large'}>
            Shop Now
          </Button>
        </Box>
      </Box>

      {/* Featured Categories */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" align="center" gutterBottom color="white">
          Featured Categories
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {categories.map((cat) => (
            <Grid item xs={6} sm={4} md={3} key={cat.title}>
              <Card
                component={Link}
                to="/productlist"
                sx={{
                  textDecoration: 'none',
                  backgroundColor: '#1e1e1e',
                  '&:hover': { boxShadow: 6, cursor: 'pointer', transform: 'scale(1.03)' },
                }}
              >
                <CardMedia
                  component="img"
                  image={cat.image}
                  height="140"
                  alt={cat.title}
                  sx={{ objectFit: 'contain', p: 1 }}
                />
                <CardContent>
                  <Typography variant="h6" align="center" color="white">
                    {cat.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Products */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" align="center" gutterBottom color="white">
          Featured Products
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {featured.map((product, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card
                component={Link}
                to="/product"
                sx={{
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#1e1e1e',
                  borderRadius: 2,
                  '&:hover': { boxShadow: 6, cursor: 'pointer', transform: 'scale(1.05)' },
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    height: 180,
                    objectFit: 'contain',
                    p: 2,
                    backgroundColor: '#2c2c2c',
                    borderRadius: 2,
                  }}
                />
                <CardContent>
                  <Typography variant="h6" align="center" color="white">
                    {product.title}
                  </Typography>
                  <Typography variant="h6" color="secondary" align="center">
                    {product.price}₹
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Button fullWidth variant="contained" color="secondary">
                      View Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" align="center" gutterBottom color="white">
          Look what customers say!
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {[...Array(5)].map((_, idx) => {
            const user = [
              { name: 'Aanya Sharma', profile: 'https://randomuser.me/api/portraits/women/44.jpg', feedback: 'Absolutely loved the collection. The delivery was super fast too!' },
              { name: 'Ravi Kumar', profile: 'https://randomuser.me/api/portraits/men/32.jpg', feedback: 'Great prices and quality. I will definitely shop again!' },
              { name: 'Meera Das', profile: 'https://randomuser.me/api/portraits/women/68.jpg', feedback: 'The dresses are gorgeous and customer support is amazing!' },
              { name: 'Arjun Singh', profile: 'https://randomuser.me/api/portraits/men/55.jpg', feedback: 'Good variety of products. My wife loved her gift!' },
              { name: 'Neha Verma', profile: 'https://randomuser.me/api/portraits/women/29.jpg', feedback: 'Easy to navigate and checkout. Loved the whole experience!' },
            ][idx];
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                <Card sx={{ backgroundColor: '#1e1e1e', p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <img
                      src={user.profile}
                      alt={user.name}
                      style={{ width: 50, height: 50, borderRadius: '50%', marginRight: 16 }}
                    />
                    <Typography variant="h6" color="white">
                      {user.name}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="gray">
                    "{user.feedback}"
                  </Typography>
                </Card>
              </Grid>
            );
          })}
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
