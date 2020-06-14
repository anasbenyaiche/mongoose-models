const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// Create the environment
require("dotenv").config();
// using express fonctionnality
const app = express();
// create a port
const port = process.env.PORT || 5000;
// use middlewares
app.use(cors());

// body-parser
app.use(express.json());
// URI localhost or altas in our it our localhost
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", (err) =>
  err
    ? console.error(err)
    : console.log("Connexion to the Database has been established")
);
// Creating the Server 
app.listen(port, () => console.log(`Your server is running on port ${port}`));
