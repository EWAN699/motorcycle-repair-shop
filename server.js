const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

const rootDir = path.join(__dirname);

app.use(morgan('dev'));
app.use(express.static(rootDir, { extensions: ['html'] }));

app.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'index.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`אלידור מוטורס server running at http://localhost:${PORT}`);
});
