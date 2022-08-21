
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
})

app.get('/get_otp', (req, res) => {
  console.log(req.query.info);
  // res.send('server_otp');
})

app.get('/check_health', (req, res) => {
  res.send('still alive');
})

app.get('/check', (req, res) => {
  res.send('check');
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);