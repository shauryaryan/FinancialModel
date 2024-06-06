// // src/pages/Analysis.jsx
// import React, { useState } from 'react';
// import { Container, Typography } from '@mui/material';
// import Visualization from '../components/Visualization';
// import DataTable from '../components/DataTable';
// import DataCleaning from '../components/DataCleaning';
// import DataModeling from '../components/DataModeling';
//
// const Analysis = () => {
//     const [filePath, setFilePath] = useState('');
//
//     const handleFilePath = (newFilePath) => {
//         setFilePath(newFilePath);
//     };
//
//     return (
//         <Container>
//             <Typography variant="h4" gutterBottom>
//                 Data Analysis
//             </Typography>
//             <DataCleaning onFileCleaned={handleFilePath} />
//             <DataModeling onFileAnalyzed={handleFilePath} />
//             {filePath && <DataTable filePath={filePath} />}
//             <Visualization />
//         </Container>
//     );
// };
//
// export default Analysis;

// src/pages/Analysis.jsx
import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import Visualization from '../components/Visualization';
import DataTable from '../components/DataTable';
import DataImport from '../components/DataImport';
import DataCleaning from '../components/DataCleaning';
import DataModeling from '../components/DataModeling';

const Analysis = () => {
    const [filePath, setFilePath] = useState('');

    const handleFileUpload = (newFilePath) => {
        setFilePath(newFilePath);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Data Analysis
            </Typography>
            <DataImport onFileUpload={handleFileUpload} />
            {filePath && (
                <>
                    <DataCleaning />
                    <DataModeling />
                    <DataTable filePath={filePath} />
                    <Visualization />
                </>
            )}
        </Container>
    );
};

export default Analysis;
