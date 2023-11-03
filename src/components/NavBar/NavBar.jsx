import React from "react";
//import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CartWidget from "../CartWidget/CartWidget";

import { deepOrange } from "@mui/material/colors";
import { Link } from "react-router-dom";

const primary = deepOrange[400]; // #ff7043

const drawerWidth = 240;

const NavBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MYBOOK
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <Link to={`/`}>
            <ListItemButton sx={{ textAlign: "center", color: "black" }}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to={`/category/terror`}>
            <ListItemButton sx={{ textAlign: "center", color: "black" }}>
              <ListItemText primary="Terror" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to={`category/romance`}>
            <ListItemButton sx={{ textAlign: "center", color: "black" }}>
              <ListItemText primary="Romance" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to={`category/literatura`}>
            <ListItemButton sx={{ textAlign: "center", color: "black" }}>
              <ListItemText primary="Literatura" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to={`/`}>
              <img src="/src/components/NavBar/MYBOOK-white.png" alt="Logo" />
            </Link>
          </Typography>
          <CartWidget />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/">
              <Button sx={{ color: "#fff", pr: 3, pl: 3 }}>Home</Button>
            </Link>
            <Link to="/category/terror">
              <Button sx={{ color: "#fff", pr: 3, pl: 3 }}>Terror</Button>
            </Link>
            <Link to="/category/romance">
              <Button sx={{ color: "#fff", pr: 3, pl: 3 }}>Romance</Button>
            </Link>
            <Link to="/category/literatura">
              <Button sx={{ color: "#fff", pr: 3, pl: 3 }}>Literatura</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default NavBar;
