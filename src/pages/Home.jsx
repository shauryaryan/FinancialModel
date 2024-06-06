// src/pages/Home.jsx
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container className="container">
            <Typography variant="h4" gutterBottom>
                Welcome to Financial Modeling App
            </Typography>
            <Typography variant="body1" paragraph>
                Simplify, analyze, and visualize your financial data with ease.
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/analysis">
                Get Started
            </Button>
        </Container>
    );
};

export default Home;

