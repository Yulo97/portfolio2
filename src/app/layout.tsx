"use client";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";

const inter = Montserrat({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const theme = createTheme({
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
