const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js");
const { transactionValidator } = require("../models/validators.js");

//POST /

//index - all transactions
transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

//show - get one
transactions.get("/:index", (req, res) => { //transactions/:index
  const { index } = req.params;
  if(transactionsArray[index]) {
    res.json(transactionsArray[index]);
  } else {
    res.status(404).json({error: "Transaction Not Found"});
    
  }
});
//create - add a new bookmark
transactions.post("/", transactionValidator, (req, res) => {
 
  //in the future, a sql Database will replace this array
  transactionsArray.push(req.body)
  res.status(201).json(transactionsArray[transactionsArray.length - 1]);
});
//update
transactions.put("/:index", transactionValidator, (req,res) => {
  const {index} = req.params
  if(transactionsArray[index]){
    transactionsArray[index] = req.body
  res.status(200).json(transactionsArray[index])
  } else {
    res.status(404).json({error : "Not Found"});
  }
});

//delete
transactions.delete("/:index", (req,res) => {
  const { index } = req.params
  if (transactionsArray[index]){
  const deletedTransaction = transactionsArray.splice(index,1) // this will return the deleted transaction
  res.status(200).json(deletedTransaction);
  // or you can return the updated transactionsArray
  //res.status(200).json(bookmarksArray);
  } else {
    res.status(404).json({error : "Not Found"});
  }
})


module.exports = transactions;