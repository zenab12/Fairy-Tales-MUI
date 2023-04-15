import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image'
import { styled } from '@mui/system';

const M = styled('Menu')({
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
});

  

const pages = ['Home', 'Tales', 'Pricing','About','Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = ()=> {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{background:'#fff',padding:2}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
          <Image alt="logo"  src="logo.svg" width={40} height={40}/>
        </Box> 

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#111',
              textDecoration: 'none',
            }}
          >            
            Fairy Tales
          </Typography>

          <Box sx={{  order:{'xs':3},  justifyContent:'end',
                alignItems:'center',flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#222"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
             
                display: { xs: 'flex', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{order:{'xs':1}, display: { xs: 'flex', md: 'none' }, mr: 1 }}>
          <Image alt="logo"  src="logo.svg" width={40} height={40}/>
          </Box>         
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#222',
              textDecoration: 'none',
              order:{'xs':2},
            }}
          >
            Fairy Tales
          </Typography>
<Box sx={{ justifyContent:'center',
                alignItems:'center',flexGrow: 1,gap:3,mr:{lg:18}, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ justifyContent:'center',
                alignItems:'center',color: '#222', display: 'flex' }}
              >
                {page}
              </Button>
            ))}
          </Box>          

          <Box sx={{ alignItems:'center',display:{'xs':'none','md':'flex'},              order:{'xs':4},flexGrow: 0 }}>
          <Typography
            variant="body1"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              color: '#111',
            }}
          >            
            login
          </Typography>
           <Button variant="contained" color="secondary">
              Signup
           </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;