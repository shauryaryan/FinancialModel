// src/components/Report.jsx
import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import axios from 'axios';

const Report = () => {
    const [reportStatus, setReportStatus] = useState('');
    const [filePath, setFilePath] = useState('path/to/your/uploaded/file.csv');  // Replace with actual file path

    const handleGenerateReport = () => {
        axios.post('http://localhost:5000/api/report', { filePath })
            .then(response => {
                setReportStatus('Report generated successfully');
                console.log('Report generated successfully:', response.data.reportPath);
            })
            .catch(error => {
                setReportStatus('Error generating report');
                console.error('Error generating report', error);
            });
    };

    return (
        <div>
            <Typography variant="body1">
                Generate a comprehensive report based on your data analysis.
            </Typography>
            <Button onClick={handleGenerateReport} variant="contained" color="secondary">
                Generate Report
            </Button>
            {reportStatus && (
                <Typography variant="body2" color="textSecondary">
                    {reportStatus}
                </Typography>
            )}
        </div>
    );
};

export default Report;

