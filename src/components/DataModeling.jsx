// // src/components/DataModeling.jsx
// import React, { useState } from 'react';
// import { Button, Typography } from '@mui/material';
// import axios from 'axios';
//
// const DataModeling = () => {
//     const [analyzeStatus, setAnalyzeStatus] = useState('');
//     const [filePath, setFilePath] = useState('/Users/shauryaaryan/Desktop/BallbyBall.csv');  // Replace with actual file path
//
//     const handleAnalyzeData = () => {
//         axios.post('http://localhost:5000/api/analyze', { filePath })
//             .then(response => {
//                 setAnalyzeStatus('Data analyzed successfully');
//                 console.log('Data analyzed successfully:', response.data.output);
//             })
//             .catch(error => {
//                 setAnalyzeStatus('Error analyzing data');
//                 console.error('Error analyzing data', error);
//             });
//     };
//
//     return (
//         <div>
//             <Typography variant="body1">
//                 Perform statistical analysis and trend detection on your data.
//             </Typography>
//             <Button onClick={handleAnalyzeData} variant="contained" color="primary">
//                 Analyze Data
//             </Button>
//             {analyzeStatus && (
//                 <Typography variant="body2" color="textSecondary">
//                     {analyzeStatus}
//                 </Typography>
//             )}
//         </div>
//     );
// };
//
// export default DataModeling;



// src/components/DataModeling.jsx
import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import axios from 'axios';

const DataModeling = () => {
    const [analyzeStatus, setAnalyzeStatus] = useState('');
    const [analysisFilePath, setAnalysisFilePath] = useState('');

    const handleAnalyzeData = () => {
        // Use the path of your uploaded file
        const filePath = '/Users/shauryaaryan/Desktop/BallbyBall.csv';

        axios.post('http://localhost:5000/api/analyze', { filePath })
            .then(response => {
                setAnalyzeStatus('Data analyzed successfully');
                setAnalysisFilePath(response.data.analysisFilePath);
                console.log('Analysis file:', response.data.analysisFilePath);
            })
            .catch(error => {
                setAnalyzeStatus('Error analyzing data');
                console.error('Error analyzing data', error);
            });
    };

    return (
        <div>
            <Typography variant="body1">
                Perform statistical analysis and trend detection on your data.
            </Typography>
            <Button onClick={handleAnalyzeData} variant="contained" color="primary">
                Analyze Data
            </Button>
            {analyzeStatus && (
                <Typography variant="body2" color="textSecondary">
                    {analyzeStatus}
                </Typography>
            )}
            {analysisFilePath && (
                <Typography variant="body2" color="textSecondary">
                    Analysis file available at: <a href={`http://localhost:5000${analysisFilePath}`} target="_blank" rel="noopener noreferrer">{analysisFilePath}</a>
                </Typography>
            )}
        </div>
    );
};

export default DataModeling;
