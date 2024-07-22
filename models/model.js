const mongoose = require('mongoose');

const customerScheme = new mongoose.Schema({
  name: String,
  age: number,
});

const customer = mongoose.model('customer', customerScheme);

module.exports = customer;