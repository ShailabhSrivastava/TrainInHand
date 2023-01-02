const mongoose = require("mongoose");

const runningStatus = new mongoose.Schema({
    trainNo: {
        type: Number
    },
    trainName: {
        type: String
    }
},{timestamps: true })

module.exports = mongoose.model("running", runningStatus);