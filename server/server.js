const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const allowedOrigin = 'http://localhost:4200/';
app.use(cors({
  origin: allowedOrigin,
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Length', 'X-Foo'],
  credentials: true,
  maxAge: 3600,
}));

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/budget', (req, res) => {
  const samp = require('/Users/harshi/Desktop/dev/personal-budget-angular/pb.json');
  res.json(samp);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
