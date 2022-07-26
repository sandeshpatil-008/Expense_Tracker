const mongoose = require("mongoose");

// create data schema (format) for db
const expenseSchema = new mongoose.Schema({
    title: String,
    price: Number,
    date: Date  
});
module.exports = mongoose.model("expense", expenseSchema);// controller madhe je function banel te module la follow karen
 