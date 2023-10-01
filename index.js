const express = require("express");
var cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
