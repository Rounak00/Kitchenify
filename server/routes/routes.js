import express from "express";
const routes= express.Router();
import {verifyAdmin} from "../middleware/verifyToken.js"
import loginController from "../controller/auth/loginController.js"
import registerController from "../controller/auth/registerController.js"
import productController from "../controller/productController.js"
import userController from "../controller/userController.js"
import healthCheck from "../controller/healthCheck.js"

//auth routes
routes.post("/register", registerController.register)
routes.post("/login",loginController.login)
routes.get("/healthCheck",healthCheck.healthCheck)
//User routes
routes.get("/user/:id",userController.getUser)
routes.get("/users",verifyAdmin,userController.getUsers)
routes.delete("/user/:id",verifyAdmin,userController.delUser)

//productroutes
routes.post("/product",verifyAdmin,productController.addProduct) //add 
routes.delete("/product/:id",verifyAdmin,productController.delProduct) //delete    
routes.put("/product/:id",verifyAdmin,productController.updateProduct) //update 
routes.get("/product",productController.getProducts)
routes.get("/product/category/:name",productController.getProducts)
routes.get("/product/:id",productController.getProduct)
routes.get("/product/tools",productController.getProducts_tools)
routes.get("/product/appliances",productController.getProducts_appliances)
routes.get("/product/electronics",productController.getProducts_electronics)
routes.get("/product/ovens",productController.getProducts_ovens)



export default routes;