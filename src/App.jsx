import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import router from "./Router";
import { getTheme } from "./theme/theme";
import UseThemeStore from "./store/UseThemeStore";
import { UseLanguageStore } from "./store/LanguageStore";
import i18n from "./i18n";

const queryClient = new QueryClient();

export default function App() {
  const language = UseLanguageStore((state) => state.language);
  const mode = UseThemeStore((state) => state.mode);

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={getTheme(mode, language)}>
        <CssBaseline />
        <RouterProvider router={router} />
        <ToastContainer />
      </ThemeProvider>
    </QueryClientProvider>
  );
}