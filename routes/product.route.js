const expores=require("express")
const router=expores.Router()
const Product=require("../models/product.model.js")
const {getproducts,getsingleproduct,getaddproduct,updateproduct,deleteproduct}=require("../controllers/product.controllers.js")

router.get("/",getproducts)
router.get("/:id",getsingleproduct)
router.post("/add",getaddproduct)
router.put("/update/:id",updateproduct)
router.delete("/delete/:id",deleteproduct)



module.exports=router;