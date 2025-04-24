import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

const drawerWidth = 240;


const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Expense Tracker
      </Typography>
      <Divider />
      <List>
        <ListItem key={1} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }} component={Link} to="/">
            <ListItemText primary="Inicio" />
          </ListItemButton>
        </ListItem>
        <ListItem key={1} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }} component={Link} to="/login">
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
        <ListItem key={1} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }} component={Link} to="/expenses">
            <ListItemText primary="Expenses" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            Expense Tracker
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button component={Link} to="/" sx={{ color: "#fff" }}>
              Inicio
            </Button>
            <Button component={Link} to="/login" sx={{ color: "#fff" }}>
              Login
            </Button>
            <Button component={Link} to="/expenses" sx={{ color: "#fff" }}>
              Gastos
            </Button>
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
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;