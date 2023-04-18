const transactionValidator = (req, res, next) => {

    if(req.body.hasOwnProperty("item_name") && req.body.hasOwnProperty("amount")){
        next()
      } else if (!req.body.itemName || !req.body.amount){
        return res.status(400).json({error: "Transactions must contain a item_name and amount"})
    
      } else {
        return res.status(400).json({error: "Transactions must contain a item_name and amount"})
    
      }
    };
    
      module.exports = { transactionValidator };