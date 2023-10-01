const express = require("express");
var cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
