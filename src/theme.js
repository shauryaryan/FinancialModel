// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000', // Black for primary color
        },
        secondary: {
            main: '#d4af37', // Gold for secondary elements
        },
        text: {
            primary: '#000000', // Black for text
            secondary: '#FFFFFF', // White for text
        },
        background: {
            default: '#FFFFFF', // White background
        },
    },
    typography: {
        fontFamily: '"Playfair Display", "Georgia", "Times New Roman", serif',
        h4: {
            fontWeight: 600,
        },
        body1: {
            fontSize: '1.2rem',
        },
        button: {
            textTransform: 'none',
            fontWeight: 500,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '5px', // Square buttons
                    color: '#FFFFFF', // White text for buttons
                    backgroundColor: '#d4af37', // Gold background for buttons
                    '&:hover': {
                        backgroundColor: '#b59a2e', // Darker gold on hover
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#000000', // Black AppBar
                },
            },
        },
    },
});

export default theme;

