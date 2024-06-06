// // src/components/DataCleaning.jsx
// import React, { useState } from 'react';
// import { Button, Typography } from '@mui/material';
// import axios from 'axios';
//
// const DataCleaning = () => {
//     const [cleanStatus, setCleanStatus] = useState('');
//     const [filePath, setFilePath] = useState('/Users/shauryaaryan/Desktop/BallbyBall.csv');  // Replace with actual file path
//
//     const handleCleanData = () => {
//         axios.post('http://localhost:5000/api/clean', { filePath })
//             .then(response => {
//                 setCleanStatus('Data cleaned successfully');
//                 console.log('Data cleaned successfully:', response.data.output);
//             })
//             .catch(error => {
//                 setCleanStatus('Error cleaning data');
//                 console.error('Error cleaning data', error);
//             });
//     };
//
//     return (
//         <div>
//             <Typography variant="body1">
//                 Clean your data to remove inconsistencies and missing values.
//             </Typography>
//             <Button onClick={handleCleanData} variant="contained" color="secondary">
//                 Clean Data
//             </Button>
//             {cleanStatus && (
//                 <Typography variant="body2" color="textSecondary">
//                     {cleanStatus}
//                 </Typography>
//             )}
//         </div>
//     );
// };
//
// export default DataCleaning;


// src/components/DataCleaning.jsx
import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import axios from 'axios';

const DataCleaning = () => {
    const [cleanStatus, setCleanStatus] = useState('');
    const [cleanedFilePath, setCleanedFilePath] = useState('');

    const handleCleanData = () => {
        // Use the path of your uploaded file
        const filePath = '/Users/shauryaaryan/Desktop/BallbyBall.csv';

        axios.post('http://localhost:5000/api/clean', { filePath })
            .then(response => {
                setCleanStatus('Data cleaned successfully');
                setCleanedFilePath(response.data.cleanedFilePath);
                console.log('Cleaned file:', response.data.cleanedFilePath);
            })
            .catch(error => {
                setCleanStatus('Error cleaning data');
                console.error('Error cleaning data', error);
            });
    };

    return (
        <div>
            <Typography variant="body1">
                Clean your data to remove inconsistencies and missing values.
            </Typography>
            <Button onClick={handleCleanData} variant="contained" color="secondary">
                Clean Data
            </Button>
            {cleanStatus && (
                <Typography variant="body2" color="textSecondary">
                    {cleanStatus}
                </Typography>
            )}
            {cleanedFilePath && (
                <Typography variant="body2" color="textSecondary">
                    Cleaned file available at: <a href={`http://localhost:5000${cleanedFilePath}`} target="_blank" rel="noopener noreferrer">{cleanedFilePath}</a>
                </Typography>
            )}
        </div>
    );
};

export default DataCleaning;
