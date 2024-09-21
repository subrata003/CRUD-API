const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
 name: {
  type: String,
  require: true
 },
 quantity: {
  type: Number,
  require: true,
  default: 0
 },
 price: {
  type: Number,
  require: true,
  default: 0
 },
 imge: {
  type: String,
  require: false
 },
}, {
 Timestamp: true
})

const Product=mongoose.model("Product",productSchema)

module.exports=Product