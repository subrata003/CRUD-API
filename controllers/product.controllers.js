const Product = require("../models/product.model.js")
const getproducts = async (req, res) => {
 try {

  const alldata = await Product.find({})
  res.status(200).json({ message: alldata })


 } catch (error) {
  res.status(500).json({ message: error.message })
 }
}

const getsingleproduct = async (req, res) => {
 try {
  const { id } = req.params;
  const findproduct = await Product.findById(id);
  res.status(200).json({ message: findproduct })
 } catch (error) {
  res.status(500).json({ message: error.message })
 }

}
const getaddproduct = async (req, res) => {
 try {
  const product = await Product.create(req.body)
  res.status(200).json({ message: product })



 } catch (error) {
  res.status(500).json({ message: error.message })

 }
}
const updateproduct = async (req, res) => {
 try {
  const { id } = req.params;
  const update = await Product.findByIdAndUpdate(id, req.body);

  if (!update) {
   return res.status(404).json({ message: "product not found" })
  }

  const updateproduct = await Product.findById(id)
  res.status(200).json({ message: updateproduct })

 } catch (error) {
  res.status(500).json({ message: error.message })
 }
}
const deleteproduct = async (req, res) => {
 try {
  const { id } = req.params;
  await Product.findByIdAndDelete(id)
  if (!Product) {
   return res.status(404).json({ message: "product not found" })
  }



  res.status(200).json({ message: "product delete successfully" })
 } catch (error) {
  res.status(500).json({ message: error.message })
 }
}
module.exports = { getproducts, getsingleproduct, getaddproduct, updateproduct, deleteproduct }