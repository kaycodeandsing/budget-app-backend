//here i'll configure my express app

const express = require("express")
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.send("Welcome to Budget App!");
});




module.exports = app;