import * as React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Typography,
  InputBase,
 Button, Menu, MenuItem
} from '@mui/material';

import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

import AdminSidemenu from './AdminSidemenu';

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

export default function AdminHeader() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);
  const navItems = ['Home', 'About', 'Contact'];

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
  }}>
  {drawerOpen ? <CloseIcon /> : <MenuIcon />}
</IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } ,flexGrow: 0.3}}>
            Dress Itto?
          </Typography>
          <Search sx={{ mx: 3, flexGrow: 12, maxWidth: 500 }}>
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
        </Toolbar>
      </AppBar>
      <AdminSidemenu open={drawerOpen} toggleDrawer={() => setDrawerOpen(false)} />
    </Box>
  );
}
