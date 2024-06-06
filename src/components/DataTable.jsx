// src/components/DataTable.jsx
import React, { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';

const DataTable = ({ filePath }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (filePath) {
            axios.get(`http://localhost:5000${filePath}`)
                .then(response => {
                    const csvData = response.data;
                    // Convert CSV to JSON
                    const rows = csvData.split('\n').map(row => row.split(','));
                    const headers = rows[0];
                    const tableData = rows.slice(1).map(row => {
                        const obj = {};
                        row.forEach((value, index) => {
                            obj[headers[index]] = value;
                        });
                        return obj;
                    });
                    setData(tableData);
                })
                .catch(error => {
                    console.error('Error fetching file', error);
                });
        }
    }, [filePath]);

    return (
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        {data.length > 0 && Object.keys(data[0]).map((key) => (
                            <TableCell key={key}>{key}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            {Object.values(row).map((value, idx) => (
                                <TableCell key={idx}>{value}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;
