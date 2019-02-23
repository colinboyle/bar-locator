const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsletterUserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = NewletterUser = mongoose.model(
  "newsletterusers",
  NewsletterUserSchema
);
