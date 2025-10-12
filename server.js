const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
app.use(express.static('Public'));
app.use(express.static(path.join(__dirname, 'src')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.use('/pages', express.static(path.join(__dirname, 'src', 'Pages')));

app.get('/quiz', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/pages/quiz.html'));
});

app.get('/introduccion', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/pages/leccion1.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
