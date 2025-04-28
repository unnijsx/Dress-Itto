import * as React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Typography,
  InputBase, Button, Menu, MenuItem, Avatar, Tooltip,
  Dialog, DialogTitle, DialogContent, DialogActions,
  List, ListItem, ListItemText, Paper, ListItemAvatar, Divider
} from '@mui/material';

import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Sidemenu from './Sidemenu';
import { Link } from 'react-router-dom';

// Search bar styling
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);
  const [openAboutDialog, setOpenAboutDialog] = React.useState(false);
  const [openContactDialog, setOpenContactDialog] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState('');
  const [filteredProducts, setFilteredProducts] = React.useState([]);

  // Dummy product list with images
  const products = [
    { id: 1, name: 'Red Party Dress', imageUrl: 'https://imgs.search.brave.com/kqOGn8rQ8HWofsdaA1P1AOiC3ej-Dt8Nuk3LQaf9uIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4Lzg3LzU1LzE4/LzM2MF9GXzg4NzU1/MTgxMV9xTGNlaks4/OFlvbWh0eWpoZEtv/VXRDZWFMbWpTazBF/ci5qcGc' },
    { id: 2, name: 'Elegant Black Gown', imageUrl: 'https://imgs.search.brave.com/kqOGn8rQ8HWofsdaA1P1AOiC3ej-Dt8Nuk3LQaf9uIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4Lzg3LzU1LzE4/LzM2MF9GXzg4NzU1/MTgxMV9xTGNlaks4/OFlvbWh0eWpoZEtv/VXRDZWFMbWpTazBF/ci5qcGc' },
    { id: 3, name: 'Summer Floral Dress', imageUrl: 'https://imgs.search.brave.com/kqOGn8rQ8HWofsdaA1P1AOiC3ej-Dt8Nuk3LQaf9uIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4Lzg3LzU1LzE4/LzM2MF9GXzg4NzU1/MTgxMV9xTGNlaks4/OFlvbWh0eWpoZEtv/VXRDZWFMbWpTazBF/ci5qcGc' },
    { id: 4, name: 'Casual Denim Dress', imageUrl: 'https://imgs.search.brave.com/kqOGn8rQ8HWofsdaA1P1AOiC3ej-Dt8Nuk3LQaf9uIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4Lzg3LzU1LzE4/LzM2MF9GXzg4NzU1/MTgxMV9xTGNlaks4/OFlvbWh0eWpoZEtv/VXRDZWFMbWpTazBF/ci5qcGc' },
    { id: 5, name: 'Wedding White Dress', imageUrl: 'https://imgs.search.brave.com/kqOGn8rQ8HWofsdaA1P1AOiC3ej-Dt8Nuk3LQaf9uIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4Lzg3LzU1LzE4/LzM2MF9GXzg4NzU1/MTgxMV9xTGNlaks4/OFlvbWh0eWpoZEtv/VXRDZWFMbWpTazBF/ci5qcGc' },
    { id: 6, name: 'Green Velvet Dress', imageUrl: 'https://imgs.search.brave.com/kqOGn8rQ8HWofsdaA1P1AOiC3ej-Dt8Nuk3LQaf9uIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4Lzg3LzU1LzE4/LzM2MF9GXzg4NzU1/MTgxMV9xTGNlaks4/OFlvbWh0eWpoZEtv/VXRDZWFMbWpTazBF/ci5qcGc' }
  ];

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  const handleOpenAbout = () => {
    setOpenAboutDialog(true);
  };

  const handleOpenContact = () => {
    setOpenContactDialog(true);
  };

  const handleCloseDialogs = () => {
    setOpenAboutDialog(false);
    setOpenContactDialog(false);
  };

  // Handle input change
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Filter products when searchInput changes
  React.useEffect(() => {
    if (searchInput.trim() === '') {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchInput]);

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(mobileMoreAnchorEl)}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
        <Typography variant="inherit">Profile</Typography>
      </MenuItem>
    </Menu>
  );

  const renderProfileMenu = (
    <Menu
      anchorEl={profileAnchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(profileAnchorEl)}
      onClose={handleProfileMenuClose}
    >
      <Link to={'/userprofile'}><MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem></Link>
      <Link to={'/userorders'}><MenuItem onClick={handleProfileMenuClose}>Orders</MenuItem></Link>
      <Link to={'/login'}><MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem></Link>
    </Menu>
  );

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          width: '100vw',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: '#1a1b1e',
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={toggleDrawer}
            disableRipple
            disableFocusRipple
            sx={{
              mr: 2,
              transition: 'transform 0.3s ease',
              outline: 'none',
              border: 'none',
              '&:focus': { outline: 'none' },
            }}
          >
            {drawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1 }}
          >
            Dress Itto?
          </Typography>

          <Search sx={{ mx: 3, flexGrow: 1.5, maxWidth: 500 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchInput}
              onChange={handleSearchChange}
            />
          </Search>

          {/* Search Results */}
          {filteredProducts.length > 0 && (
            <Paper sx={{ position: 'absolute', top: 65, left: 10, right: 10, maxHeight: 300, overflow: 'auto', backgroundColor: '#333' }}>
              <List sx={{ padding: 0 }}>
                {filteredProducts.map((product) => (
                  <Link
                    to={`/product`}
                    key={product.id}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <ListItem button>
                      <ListItemAvatar>
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          style={{ width: 50, height: 50, objectFit: 'cover' }}
                        />
                      </ListItemAvatar>
                      <ListItemText style={{color:"white"}} primary={product.name} />
                    </ListItem>
                    <Divider />
                  </Link>
                ))}
              </List>
            </Paper>
          )}

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, mx: 3 }}>
            <Button color="inherit" onClick={() => {}}>Home</Button>
            <Button color="inherit" onClick={handleOpenAbout}>About</Button>
            <Button color="inherit" onClick={handleOpenContact}>Contact</Button>
          </Box>

          {/* Profile Icon */}
          <Box sx={{ display: 'flex' }}>
            <Tooltip title="Account">
              <IconButton color="inherit" onClick={handleProfileMenuOpen}>
                <Avatar sx={{ width: 32, height: 32 }}>
                  <AccountCircleIcon />
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderProfileMenu}
      <Sidemenu open={drawerOpen} toggleDrawer={() => setDrawerOpen(false)} />

      {/* About Dialog */}
      <Dialog open={openAboutDialog} onClose={handleCloseDialogs}>
        <DialogTitle>About Us</DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Welcome to Online Dress Store! Founded by <strong>Priya Mehra</strong> in 2022,
            we are passionate about bringing the latest fashion trends to your doorstep.
          </Typography>
          <Typography gutterBottom>
            Our amazing team of designers and fashion enthusiasts work hard every day to curate a stunning collection for you.
          </Typography>
          <Typography gutterBottom>
            Thank you for choosing us to be part of your style journey!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogs} color="secondary" variant="contained">Close</Button>
        </DialogActions>
      </Dialog>

      {/* Contact Dialog */}
      <Dialog open={openContactDialog} onClose={handleCloseDialogs}>
        <DialogTitle>Contact Us</DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            📞 Phone: +91 9876543210
          </Typography>
          <Typography gutterBottom>
            📧 Email: support@onlinedressstore.com
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogs} color="secondary" variant="contained">Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
