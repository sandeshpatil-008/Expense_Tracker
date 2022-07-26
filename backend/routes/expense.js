const express = require("express");
const router = express.Router();

// controller madhala fact create user use karane
router.post("/", require("../controllers/expense").createExpense);

// read all data
router.get("/", require("../controllers/expense").getAllExpense);

// read one person data
router.get("/:userId", require("../controllers/expense").getExpense);

// delete one person data
router.delete("/:userId", require("../controllers/expense").deleteExpense);

// update one person data
router.put("/:userId", require("../controllers/expense").updateExpense);

module.exports = router;