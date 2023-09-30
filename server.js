//Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

// app.use('/', express.static('public'));
app.use(cors());

// const budget = { 
//   myBudget: [
//   {
//     title: 'Extras',
//     budget: 50
//   },
//   {
//     title: 'Grocery-List',
//     budget :150
//   },
//   {
//     title: 'Rent',
//     budget:525
//   }
// ]
// };

// app.get('/hello', (req, res) => {
//   res.send('Hello World!');
// });

app.get('/budget', (req, res) => {
  const samp=require('./pb.json')
  res.json(samp);

  // fs.readFile("pb.json", "utf8", (err, data) => {
  //   if (err) {
  //     console.error("Error reading JSON file:", err);
  //     res.status(500).send("Internal Server Error");
  //     return;
  //   }

  //   try {
  //     const pbData = JSON.parse(data);
  //     res.json(pbData);
  //   } catch (error) {
  //     console.error("Error parsing JSON:", error);
  //     res.status(500).send("Internal Server Error");
  //   }
  // });
});

app.listen(port, () => {
    console.log(`Example API served at http://localhost:${port}!`);
});