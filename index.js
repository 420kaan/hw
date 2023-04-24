const express = require("express");
const app = express();
const port = 3002;
//const fetch = require('node-fetch');

app.use(express.static("public"));
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
