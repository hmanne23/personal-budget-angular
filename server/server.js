const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;


app.use(cors()); // Use the cors middleware with your options


app.get('/budget', (req, res) => {
  const samp = require('/Users/harshi/Desktop/dev/personal-budget-angular/pb.json');
  res.json(samp);
});

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
