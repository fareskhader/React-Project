import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router";
import { useAuthStore } from "../store/useAuthStore";
export default function Navbar() {
  const token = useAuthStore((state)=>state.token)
  const Logout = useAuthStore((state)=>state.logout)
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "background.paper" }}>
        <Toolbar variant="h6" component="a" color="text">
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box>
            <Button component={Link} to="/">
              Home
            </Button>
            {token ? (
              <>
                <Button component={Link} onClick={Logout}>Logout</Button>
              </>
            ) : (
              <>
                {" "}
                <Button component={Link} to="/login">
                  login
                </Button>
                <Button component={Link} to="/register">
                  Register
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
        <Box sx={{ flexGrow: 1 }}></Box>
      </AppBar>
    </>
  );
}
