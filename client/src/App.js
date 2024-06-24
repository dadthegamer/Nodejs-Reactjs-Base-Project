import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, Box } from '@mui/material';
import { blue, grey } from '@mui/material/colors';


// Import Components
import Navbar from './Navbar.js';
import Home from './Pages/Home.js';
import Footer from './Pages/Footer.js';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[50],
        dark: grey[800],
        contrastText: grey[900],
      },
      secondary: {
        main: blue[600],
        light: blue[300],
        dark: blue[900],
        contrastText: '#fff',
      },
      background: {
        default: grey[100],
      },
      success: {
        main: '#4caf50',
        light: '#66bb6a',
        dark: '#388e3c',
        contrastText: '#fff',
      },
      error: {
        main: '#f44336',
        light: '#e57373',
        dark: '#d32f2f',
        contrastText: '#fff',
      },
    },
    typography: {
      fontFamily: 'Source Code Pro, monospace',
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained',
          disableRipple: true,
          disableElevation: true,
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'standard',
          color: 'primary',
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Box className="app"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            marginTop: '3rem',
            width: '100%',
            bgcolor: 'background.default',
            position: 'relative',
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h1>About</h1>} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
