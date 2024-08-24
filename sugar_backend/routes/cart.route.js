import express from "express";
import productModel from "../models/product.model.js";
import cartModel from "../models/cart.model.js";

const cartRouter = express.Router();

cartRouter.post("/addToCart/:id", async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  try {
    const findItem = await productModel.findById(id);

    if (!findItem) {
      return res.status(500).json({ msg: `Product not found` });
    }

    let cart = await cartModel.findOne({ userId });

    if (!cart) {
      cart = new cartModel({
        userId,
        items: [],
      });
    }

    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === id
    );

    if (existingItemIndex >= 0) {
      cart.items[existingItemIndex].quantity += 1;
    } else {
      cart.items.push({ productId: id, quantity: 1 });
    }

    await cart.save();
    res.status(200).json({ msg: "Product added to cart successfully", cart });
  } catch (error) {
    res.status(500).json({ msg: `Internal server error ${error}` });
  }
});

cartRouter.get("/cartItems", async (req, res)=>{
    
    const userId = req.user._id;
    
    try {
        const items = await cartModel.find({userId});
        
       return res.status(200).json({msg: `Item fetched successfully from cart`, items})
        
    } catch (error) {
       return res.status(500).json({msg: `Error occurred while fetching data from cart ${error}`, })
    }
})

cartRouter.delete("/deleteItem/:id", async (req, res)=>{

    const {id} = req.params;
    const userId = req.user._id;

    try {
        let cart = await cartModel.findOne({userId});

        if(!cart){
            return res.status(400).json({msg: `Cart not found`})
        }

        const itemIndex = cart.items.findIndex(item => item.productId.toString() === id.toString());

        if(itemIndex === -1){
            return res.status(404).json({ msg: `Product not found in cart` });
        }

        cart.items.splice(itemIndex, 1);

        await cart.save()

        res.status(200).json({ msg: `Product deleted from cart successfully`});

    } catch (error) {
        return res.status(500).json({msg: `Error occurred while deleting product from the cart ${error}`,})
    }
})

export default cartRouter;
