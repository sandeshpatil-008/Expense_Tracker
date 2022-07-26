const expenseModel = require("../models/expense");

// post/create new data
exports.createExpense = async (req, res) => { // usre sathi export karne

    try {
        const users = await new expenseModel(req.body).save();
        res.status(201).json(users);
    } catch (err) {
        res.status(400).json({ err });
    }
}
//get/read data for all user
exports.getAllExpense = async (req, res) => {
    try {
        const users = await expenseModel.find();
        res.json(users)
    } catch (err) {
        res.json()
    }
}
// get/read one person data
exports.getExpense = async (req, res) => {
    try {
        const users = await expenseModel.find({ _id: req.params.userId });
        res.json(users);
    } catch (err) {
        res.json({ err });
    }
}
// delete one person data
exports.deleteExpense = (req, res) => {
    expenseModel.findOneAndDelete({ _id: req.params.userId }, (err, data) => {
        if (err) {
            res.json({ err });
        } else {
            res.json(data);
        }
    });
}
// put/update one person data
exports.updateExpense = (req, res) => {
    expenseModel.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, data) => {
        if (err) {
            res.json({ err })
        } else {
            res.json(data);
        }
    })
}