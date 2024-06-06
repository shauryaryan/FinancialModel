// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const cors = require('cors');
// const { exec } = require('child_process');
//
// const app = express();
// const PORT = 5000;
//
// // Replace this path with your actual Python path
// // For a global installation, it might be `/usr/local/bin/python3`
// // For a virtual environment, it would be something like `path.join(__dirname, 'venv/bin/python')`
// const pythonPath = '/Users/shauryaaryan/WebstormProjects/financialmodeling/backend/venv/bin/python';
//
// app.use(cors());
// app.use(express.json());
// app.use('/uploads', express.static(path.join(__dirname, 'data/uploads')));
//
// // Set up storage engine
// const storage = multer.diskStorage({
//     destination: './data/uploads/',
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     }
// });
//
// const upload = multer({ storage });
//
// // Serve a basic HTML page at the root URL
// app.get('/', (req, res) => {
//     res.send('<h1>Backend Server is Running</h1><p>Welcome to the Financial Modeling API</p>');
// });
//
// app.post('/api/upload', upload.single('file'), (req, res) => {
//     res.json({ filePath: `/uploads/${req.file.filename}` });
// });
//
// app.post('/api/clean', (req, res) => {
//     const { filePath } = req.body;
//     exec(`${pythonPath} scripts/clean_data.py ${filePath}`, (error, stdout, stderr) => {
//         if (error) {
//             console.error(`exec error: ${error}`);
//             return res.status(500).json({ error: 'Data cleaning failed' });
//         }
//         res.json({ message: 'Data cleaned successfully', output: stdout });
//     });
// });
//
// app.post('/api/analyze', (req, res) => {
//     const { filePath } = req.body;
//     exec(`${pythonPath} scripts/analyze_data.py ${filePath}`, (error, stdout, stderr) => {
//         if (error) {
//             console.error(`exec error: ${error}`);
//             return res.status(500).json({ error: 'Data analysis failed' });
//         }
//         res.json({ message: 'Data analyzed successfully', output: stdout });
//     });
// });
//
// app.post('/api/report', (req, res) => {
//     const { filePath } = req.body;
//     exec(`${pythonPath} scripts/generate_report.py ${filePath}`, (error, stdout, stderr) => {
//         if (error) {
//             console.error(`exec error: ${error}`);
//             return res.status(500).json({ error: 'Report generation failed' });
//         }
//         res.json({ message: 'Report generated successfully', reportPath: stdout.trim() });
//     });
// });
//
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { exec } = require('child_process');

const app = express();
const PORT = 5000;

// Update with your actual Python path
const pythonPath = '/Users/shauryaaryan/WebstormProjects/financialmodeling/backend/venv/bin/python';

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'data/uploads')));

const storage = multer.diskStorage({
    destination: './data/uploads/',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

// Serve a basic HTML page
app.get('/', (req, res) => {
    res.send('<h1>Backend Server is Running</h1><p>Welcome to the Financial Modeling API</p>');
});

app.post('/api/upload', upload.single('file'), (req, res) => {
    res.json({ filePath: `/uploads/${req.file.filename}` });
});

app.post('/api/clean', (req, res) => {
    const { filePath } = req.body;
    exec(`${pythonPath} scripts/clean_data.py ${filePath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).json({ error: 'Data cleaning failed' });
        }
        const cleanedFilePath = stdout.trim();
        res.json({ message: 'Data cleaned successfully', cleanedFilePath });
    });
});

app.post('/api/analyze', (req, res) => {
    const { filePath } = req.body;
    exec(`${pythonPath} scripts/analyze_data.py ${filePath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).json({ error: 'Data analysis failed' });
        }
        const analysisFilePath = stdout.trim();
        res.json({ message: 'Data analyzed successfully', analysisFilePath });
    });
});

app.post('/api/report', (req, res) => {
    const { filePath } = req.body;
    exec(`${pythonPath} scripts/generate_report.py ${filePath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).json({ error: 'Report generation failed' });
        }
        const reportPath = stdout.trim();
        res.json({ message: 'Report generated successfully', reportPath });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

