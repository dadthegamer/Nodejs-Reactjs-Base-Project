import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, Box } from '@mui/material';
import { blue, grey } from '@mui/material/colors';


// Import Components
import Navbar from './Navbar.js';

function App() {
  const [mode, setMode] = React.useState('light');

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: mode === 'dark' ? grey[900] : grey[900],
        light: mode === 'dark' ? grey[500] : blue[300],
        dark: mode === 'dark' ? grey[900] : blue[900],
        contrastText: mode === 'dark' ? '#fff' : grey[100],
      },
      secondary: {
        main: blue[600],
        light: blue[300],
        dark: blue[900],
        contrastText: '#fff',
      },
      background: {
        default: mode === 'dark' ? grey[800] : grey[800],
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
        <Box className="app"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100%',
            bgcolor: 'background.default',
            position: 'relative',
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/about" element={<h1>About</h1>} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
