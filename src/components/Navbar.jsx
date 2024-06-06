// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static" className="AppBar">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Financial Modeling App
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/analysis">Analysis</Button>
                <Button color="inherit" component={Link} to="/reports">Reports</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

