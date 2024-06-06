// src/components/Report.jsx
import React from 'react';
import { Button, Typography } from '@mui/material';

const Report = () => {
    const handleGenerateReport = () => {
        // Add report generation logic here
        console.log('Report generated');
    };

    return (
        <div>
            <Typography variant="body1">
                Generate a comprehensive report based on your data analysis.
            </Typography>
            <Button onClick={handleGenerateReport} variant="contained" color="secondary">
                Generate Report
            </Button>
        </div>
    );
};

export default Report;
