import * as React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Typography,
  InputBase, List, ListItem, ListItemButton,
  ListItemText, Button, Menu, MenuItem
} from '@mui/material';

import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

import { Link } from 'react-router-dom';
import LoggedoutSidemenu from '../Sidemenu/LoggedoutSidemenu';

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

export default function LoggedoutHeader() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);
  const navItems = ['Home'];
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button color="inherit">Login</Button>
      </MenuItem>
      <MenuItem>
        <Button color="inherit">Register</Button>
      </MenuItem>
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
  aria-label="open drawer"
  onClick={toggleDrawer}
  disableRipple
  disableFocusRipple
  sx={{
    mr: 2,
    transition: 'transform 0.3s ease',
    outline: 'none',
    border: 'none',
    '&:focus': {
      outline: 'none',
    },
  }}
>
  {drawerOpen ? <CloseIcon /> : <MenuIcon />}
</IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } ,flexGrow: 1}}
          >
            Dress Itto?
          </Typography>

          <Search sx={{ mx: 3, flexGrow: 1.5, maxWidth: 500 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>

          {/* Nav Items */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, mx: 3 }}>
            {navItems.map((item) => (
              <Button key={item} color="inherit">
                {item}
              </Button>
            ))}
          </Box>

          {/* Auth Buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button
  component={Link}
  to="/login"
  color="inherit"
  sx={{ textTransform: 'none' }}
>
  Login
</Button>            <Link to="/register" style={{ textDecoration: 'none' }}>
  <Button
    color="inherit"
    variant="outlined"
    sx={{ color: 'white', borderColor: 'white' }}
  >
    Register
  </Button>
</Link>
          </Box>

          {/* Mobile menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      <LoggedoutSidemenu open={drawerOpen} toggleDrawer={() => setDrawerOpen(false)} />
    </Box>
  );
}
