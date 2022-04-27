import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import logo from "../../assets/Groww_app_logo.png";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const Navbar = ({ children }) => {
  let navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "white"
      }}>
        <Toolbar>
          // Todo: style groww logo if you have time
          {/* <div sx={{height: "4rem",}}>
          <img src={logo} alt="logo"/>
          </div> */}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {[{ name: 'All Banks', href: '/all-banks' }, { name: 'Favorites', href: '/favorites' }].map((text, index) => (
              <ListItem button key={text?.name}
                onClick={() => navigate(text?.href)}
                selected={text?.href === window.location.pathname}
              >
                <ListItemText primary={text?.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <main >{children}</main>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
export default Navbar