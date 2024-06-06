// src/components/Visualization.jsx
import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    BarChart, Bar, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

const Visualization = () => {
    const [analysisFilePath, setAnalysisFilePath] = useState('');
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (analysisFilePath) {
            axios.get(`http://localhost:5000${analysisFilePath}`)
                .then(response => {
                    const csvData = response.data;
                    // Convert CSV to JSON
                    const rows = csvData.split('\n').map(row => row.split(','));
                    const headers = rows[0];
                    const data = rows.slice(1).map(row => {
                        const obj = {};
                        row.forEach((value, index) => {
                            obj[headers[index]] = value;
                        });
                        return obj;
                    });
                    setChartData(data);
                })
                .catch(error => {
                    console.error('Error fetching analysis file', error);
                });
        }
    }, [analysisFilePath]);

    const handleFetchAnalysis = () => {
        // Use the path of your analysis file
        const filePath = '/Users/shauryaaryan/Desktop/BallbyBall.csv';

        axios.post('http://localhost:5000/api/analyze', { filePath })
            .then(response => {
                setAnalysisFilePath(response.data.analysisFilePath);
            })
            .catch(error => {
                console.error('Error analyzing data', error);
            });
    };

    return (
        <div>
            <Typography variant="body1">
                Visualize your data through various charts and graphs.
            </Typography>
            <Button onClick={handleFetchAnalysis} variant="contained" color="primary">
                Fetch Analysis Data
            </Button>
            {chartData.length > 0 && (
                <>
                    <Typography variant="h6" style={{ marginTop: '20px' }}>
                        Line Chart
                    </Typography>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>

                    <Typography variant="h6" style={{ marginTop: '20px' }}>
                        Bar Chart
                    </Typography>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="uv" fill="#8884d8" />
                            <Bar dataKey="pv" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>

                    <Typography variant="h6" style={{ marginTop: '20px' }}>
                        Pie Chart
                    </Typography>
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            <Pie data={chartData} dataKey="uv" outerRadius={80} fill="#8884d8">
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#8884d8" : "#82ca9d"} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>

                    <Typography variant="h6" style={{ marginTop: '20px' }}>
                        Radar Chart
                    </Typography>
                    <ResponsiveContainer width="100%" height={400}>
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="name" />
                            <PolarRadiusAxis />
                            <Radar name="UV" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        </RadarChart>
                    </ResponsiveContainer>
                </>
            )}
        </div>
    );
};

export default Visualization;

