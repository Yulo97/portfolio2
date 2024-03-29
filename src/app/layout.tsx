"use client";
import "./globals.scss";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import Cookies from "js-cookie";

//traductions
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "../translations/es/global.json";
import global_en from "../translations/en/global.json";

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

const inter = Montserrat({ subsets: ["latin"] });

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Función para generar el tema con modo oscuro
const createDarkTheme = () => {
  return createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#101010",
      },
      primary: {
        main: "#009e66",
      },
      text: {
        primary: "#fff",
      },
    },
    typography: {
      fontFamily: '"Montserrat", "Poppins"',
      h2: {
        textTransform: "uppercase",
        fontSize: "46px",
        fontWeight: 400,
      },
      h5: {
        textTransform: "uppercase",
        fontSize: "20px",
      },
    },
  });
};

// Función para generar el tema con modo claro
const createLightTheme = () => {
  return createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#f8f8f5",
        paper: "#fff",
      },
      primary: {
        main: "#009e66",
      },
      text: {
        primary: "#000",
      },
    },
    typography: {
      fontFamily: '"Montserrat", "Poppins"',
      h2: {
        textTransform: "uppercase",
        fontSize: "46px",
        fontWeight: 400,
      },
      h5: {
        textTransform: "uppercase",
        fontSize: "20px",
      },
    },
  });
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [themeMode, setThemeMode] = useState<string>("dark");

  const toggleTheme = () => {
    setThemeMode((prevMode) => {
      Cookies.set("theme", prevMode === "light" ? "dark" : "light");
      return prevMode === "light" ? "dark" : "light";
    });
  };

  // Determinar qué tema usar según el modo actual
  const theme = themeMode === "dark" ? createDarkTheme() : createLightTheme();

  useEffect(() => {
    if (Cookies.get("theme") === "light") setThemeMode("light");
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                right: "50%",
              }}
            >
              <CircularProgress color="primary" />
            </Box>
          </ThemeProvider>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <I18nextProvider i18n={i18next}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar toggleTheme={toggleTheme} themeMode={themeMode} />
            {children}
          </ThemeProvider>
        </I18nextProvider>
      </body>
    </html>
  );
}
