const express = require('express');
const app = express();

app.get('/api/customers', (req, res) => {
  const cunstomers = [
    {id:1, name: "taimoor"},
    {id:2, name: "subham"},
    {id:3, name: "kardam"}
  ];

  res.json(cunstomers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));