require('dotenv').config();
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('*', function (_request, response) {
  response.sendFile(path.join(__dirname, '.././build/', 'index.html'));
});

app.listen(PORT, console.log(`Server on port: ${PORT}`));
