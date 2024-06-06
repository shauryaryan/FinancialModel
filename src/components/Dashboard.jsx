// src/components/Dashboard.jsx
import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import DataImport from './DataImport';
import DataCleaning from './DataCleaning';
import DataModeling from './DataModeling';
import Visualization from './Visualization';
import Report from './Report';

const Dashboard = () => {
    return (
        <Container className="container">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h5">Import Data</Typography>
                        <DataImport />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h5">Clean Data</Typography>
                        <DataCleaning />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h5">Analyze Data</Typography>
                        <DataModeling />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h5">Visualize Data</Typography>
                        <Visualization />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h5">Generate Report</Typography>
                        <Report />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;
