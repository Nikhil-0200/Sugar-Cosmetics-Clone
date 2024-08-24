import express from "express";
import productModel from "../models/product.model.js";

const productRouter = express();

productRouter.post("/create", async (req, res) => {
  const { title, price, category, images, ratings} = req.body;
  try {
    const checkProduct = await productModel.findOne({title});

    if(checkProduct){
        return res.status(400).json({msg: `Product already exists`})
    } 

    const addProduct = new productModel({
        title, 
        price,
        category,
        images,
        ratings
    })

    await addProduct.save();

    return res.status(200).json({msg: `Product added successfully`})

  } catch (error) {
    return res.status(500).json({msg: `Error occurred while adding products`})
  }
});

productRouter.get("/item", async (req, res)=>{
  
  const {title, category, page = 1, limit=4, q} = req.query
  
  try {
    const query = {};

    if(title) query.title = new RegExp(title, "i");
    if(category) query.category = new RegExp(category, "i");
    if(q) {
      query.$or = [
        {title: new RegExp (q, "i")},
        {category: new RegExp (q, "i")}
      ]
    }
    
    const item = await productModel.find(query)

    return res.status(200).json({msg: `Item Found`, item})

  } catch (error) {
    return res.status(400).json({msg: `Error occurred in finding product ${error}`, })
  }
})

export default productRouter;