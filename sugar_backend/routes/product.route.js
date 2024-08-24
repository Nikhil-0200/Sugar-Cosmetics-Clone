import express from "express";
import productModel from "../models/product.model.js";

const productRouter = express();

productRouter.post("/create", async (req, res) => {
  const { title, description, price, category, images, ratings} = req.body;
  try {
    const checkProduct = await productModel.findOne({title});

    if(checkProduct){
        return res.status(400).json({msg: `Product already exists`})
    } 

    const addProduct = new productModel({
        title, 
        description,
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

export default productRouter;