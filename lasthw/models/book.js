const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SchemaBookInfo = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const BookSchema = mongoose.model("Book", SchemaBookInfo);

module.exports = BookSchema;
