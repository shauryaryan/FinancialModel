// // src/components/DataImport.jsx
// import React, { useState } from 'react';
// import { Button, TextField, Typography } from '@mui/material';
// import axios from 'axios';
//
// const DataImport = () => {
//     const [file, setFile] = useState(null);
//     const [uploadStatus, setUploadStatus] = useState('');
//
//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };
//
//     const handleUpload = () => {
//         if (!file) {
//             setUploadStatus('Please select a file first.');
//             return;
//         }
//
//         const formData = new FormData();
//         formData.append('file', file);
//
//         axios.post('http://localhost:5000/api/upload', formData)
//             .then(response => {
//                 setUploadStatus('File uploaded successfully');
//                 console.log('File uploaded successfully:', response.data.filePath);
//             })
//             .catch(error => {
//                 setUploadStatus('Error uploading file');
//                 console.error('Error uploading file', error);
//             });
//     };
//
//     return (
//         <div>
//             <TextField type="file" onChange={handleFileChange} />
//             <Button onClick={handleUpload} variant="contained" color="primary">
//                 Upload
//             </Button>
//             {uploadStatus && (
//                 <Typography variant="body2" color="textSecondary">
//                     {uploadStatus}
//                 </Typography>
//             )}
//         </div>
//     );
// };
//
// export default DataImport;

// src/components/DataImport.jsx
import React, { useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import axios from 'axios';

const DataImport = ({ onFileUpload }) => {
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (!file) {
            setUploadStatus('Please select a file first.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        axios.post('http://localhost:5000/api/upload', formData)
            .then(response => {
                setUploadStatus('File uploaded successfully');
                onFileUpload(response.data.filePath);
                console.log('File uploaded successfully:', response.data.filePath);
            })
            .catch(error => {
                setUploadStatus('Error uploading file');
                console.error('Error uploading file', error);
            });
    };

    return (
        <Box sx={{ marginBottom: 2 }}>
            <Typography variant="h6" gutterBottom>
                Upload Data File
            </Typography>
            <TextField type="file" onChange={handleFileChange} sx={{ marginRight: 2 }} />
            <Button onClick={handleUpload} variant="contained" color="primary">
                Upload
            </Button>
            {uploadStatus && (
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                    {uploadStatus}
                </Typography>
            )}
        </Box>
    );
};

export default DataImport;

