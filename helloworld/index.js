console.log('Helo, World! Node is working...');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Homepage! Hello world.');
});

app.get('/about', (req, res) => {
  res.send('About page. Nice.');
});

app.listen(3000, () => console.log('listening on port 3000'));
