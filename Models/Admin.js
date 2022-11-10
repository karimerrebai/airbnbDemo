const mongoose = require("mongoose");
const User = require("./user");
const schemaAdmin = new mongoose.Schema({}, { timestamps: true });
module.exports = User.discriminator("Admin", schemaAdmin);
