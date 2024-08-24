import express from "express";
import productModel from "../models/product.model.js";
import authorization from "../middlewares/authorization.middleware.js";

const productRouter = express();

productRouter.post("/create", authorization, async (req, res) => {
  const { title, price, category, images, ratings } = req.body;
  try {
    const checkProduct = await productModel.findOne({ title });

    if (checkProduct) {
      return res.status(400).json({ msg: `Product already exists` });
    }

    const addProduct = new productModel({
      title,
      price,
      category,
      images,
      ratings,
    });

    await addProduct.save();

    return res.status(200).json({ msg: `Product added successfully` });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: `Error occurred while adding products` });
  }
});

productRouter.get("/item", async (req, res) => {
  const { _id, title, category, page = 1, limit = 4, q, sortBy, order="asc" } = req.query;

  try {
    const query = {};

    if (_id) query._id = _id;
    if (title) query.title = new RegExp(title, "i");
    if (category) query.category = new RegExp(category, "i");
    if (q) {
      query.$or = [
        { title: new RegExp(q, "i") },
        { category: new RegExp(q, "i") },
      ];
    }

    const sort = {};

    if(sortBy){
      const direction = order === "desc" ? -1 : 1;
      sort[sortBy] = direction;
    }

    const item = await productModel
      .find(query)
      .sort(sort)
      .limit(limit)
      .skip((page - 1) * limit)
      .exec();

    const totalProducts = await productModel.countDocuments(query);

    return res.status(200).json({
      item,
      totalProducts,
      currentPage: page,
      totalPages: Math.ceil(totalProducts / limit),
    });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: `Error occurred in finding product ${error}` });
  }
});

export default productRouter;
