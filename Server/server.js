const express = require("express");
const app = express();

// add middlewares
const path = require("path");

app.use(express.static(path.join(__dirname, "public", "index.html")));
app.use(express.static("public"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
