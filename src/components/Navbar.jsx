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
import { Link,  } from "react-router";
import { useAuthStore } from "../store/useAuthStore";
import UseThemeStore from "../store/UseThemeStore";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { UseLanguageStore } from "../store/LanguageStore";
import { useTranslation } from "react-i18next";
export default function Navbar() {
  const token = useAuthStore((state)=>state.token)
  const Logout = useAuthStore((state)=>state.logout)
  const mode = UseThemeStore((state)=>state.mode)
  const toggleMode = UseThemeStore((state)=>state.toggleMode)
  const language = UseLanguageStore((state)=>state.language)
  const toggleLanguage = UseLanguageStore((state)=>state.toggleLanguage)
  const {t} = useTranslation();
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "background.paper" }}>
        <Toolbar variant="h6"  color="text">
          <AdbIcon sx={{ color: "primary.main", display: { xs: "none", md: "flex" }, mr: 1 }} />
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
              color: "primary.main",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box>
            <Button component={Link} to="/">
              {t('nav.home')}
            </Button>
            {token ? (
              <>
                <Button component={Link} onClick={Logout}>
                  {t('nav.logout')}
                </Button>
              </>
            ) : (
              <>
                {" "}
                <Button component={Link} to="/login">
                  {t('nav.login')}
                </Button>
                <Button component={Link} to="/register">
                  {t('nav.register')}  
                </Button>
                 
              </>
            )}
            <Button component={Link} to="/cart">
                  {t('nav.cart')}
                </Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Tooltip title={mode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}>
              <IconButton onClick={toggleMode} color="inherit" sx={{color: "text.primary"}}>
                {mode === "light" ? <ModeNightIcon /> : <LightModeIcon />}
              </IconButton>
            </Tooltip>
            <Tooltip sx={{fontSize:"16px"}} title={language === "en" ? "Switch to Arabic" : "Switch to English"}>
              <IconButton onClick={toggleLanguage}>
                {language === "en" ? "العربية" : "English"}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
