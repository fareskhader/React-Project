import { createTheme } from "@mui/material/styles";
import { UseLanguageStore } from "../store/LanguageStore";

const lightPalette = {
  mode: "light",
  primary: { main: "#005E53" },
  text: { primary: "#3E4946" },
  background: { default: "#F6F3F2", paper: "#FFFFFF" },
  surface: { main: "#F6F3F2" },
  PastelMintGreen: { main: "#ACEDDA" },
};

const darkPalette = {
  mode: "dark",
  primary: { main: "#4FD1BE", contrastText: "#00201B" },
  text: { primary: "#E1E3E0", secondary: "#A9B4B1" },
  background: { default: "#0F1514", paper: "#182120" },
  surface: { main: "#212B2A" },
  PastelMintGreen: { main: "#1F4F47" },
  divider: "#2E3A38",
  error: { main: "#FFB4AB" },
};


export const getTheme = (mode, language) =>
  createTheme({
    palette: mode === "light" ? lightPalette : darkPalette,
    typography: {
fontFamily:
language === "ar" ? 'cairo' : 'Roboto'
 ,     
     button: {
        textTransform: "capitalize",
      },
    },
    shape: {

    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 8,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "filled",
          fullWidth: true,
          margin: "normal",
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.palette.surface.main,
            borderRadius: 8,
            "&:before, &:after": { display: "none" },
            "&:hover, &.Mui-focused": {
              backgroundColor: theme.palette.surface.main,
            },
          }),
        },
      },
      MuiLink: {
        defaultProps: { underline: "none" },
      },
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          a: {
            textDecoration: "none",
            fontFamily: "inherit",
            fontWeight: 500,
            color: theme.palette.primary.main,
          },
          "input::-ms-reveal, input::-ms-clear": { display: "none" },
        }),
      },
    },
  });

