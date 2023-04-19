//here i'll configure my express app 
//Dependencies

const express = require("express")
const cors = require("cors");
const transactionsController = require("./controllers/transactionsController.js");

const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req,res) => {
    res.send("Welcome to Budget App!");
});

  
  app.use("/transactions", transactionsController);
  
  app.get("*", (req,res) => {
      res.status(404).json({error : "Page Not Found"})
  })
  
  
  // EXPORT
module.exports = app;