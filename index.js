
const productRoute = require("./routes/product.route.js")
const express = require("express")
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.use("/api/product", productRoute)


app.get("/", (req, res) => {
 res.send("this is my backend")
})

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://subratajpg2003:5VVax1WR1WNYFkld@backenddb.lgpey.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backenddb").then(() => {
 console.log(("database connected"));
 app.listen(3000, () => {
  console.log("your server is ready");

 })

}).catch(() => {
 console.log("database is not connected");


})




//mongodb+srv://subratajpg2003:<db_password>@backenddb.lgpey.mongodb.net/?retryWrites=true&w=majority&appName=backenddb























/*const Product = require("./models/product.model.js")
const express = require("express")
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))




app.get("/", (req, res) => {
 res.send("this is my backend")
})

//get all prodect from api
app.get("/api/product", async (req, res) => {
 try {

  const alldata = await Product.find({})
  res.status(200).json({ message: alldata })


 } catch (error) {
  res.status(500).json({ message: error.message })
 }
})


//find product from api
app.get("/api/product/:id", async (req, res) => {
 const { id } = req.params;
 const findproduct = await Product.findById(id);
 res.status(200).json({ message: findproduct })
})

//add product api
app.post("/api/product/add", async (req, res) => {
 try {
  const product = await Product.create(req.body)
  res.status(200).json({ message: product })



 } catch (error) {
  res.status(500).json({ message: error.message })

 }
})

//update api

app.put("/api/product/update/:id", async (req, res) => {
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

})

//delete api

app.delete("/api/product/delete/:id", async (req, res) => {
 try {
  const { id } = req.params;
  await Product.findByIdAndDelete(id)
if(!Product){
 return res.status(404).json({message:"product not found"})
}



  res.status(200).json({ message: "product delete successfully" })
 } catch (error) {
  res.status(500).json({ message: error.message })
 }

})

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://subratajpg2003:5VVax1WR1WNYFkld@backenddb.lgpey.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backenddb").then(() => {
 console.log(("database connected"));
 app.listen(3000, () => {
  console.log("your server is ready");

 })

}).catch(() => {
 console.log("database is not connected");


})*/




//mongodb+srv://subratajpg2003:<db_password>@backenddb.lgpey.mongodb.net/?retryWrites=true&w=majority&appName=backenddb

