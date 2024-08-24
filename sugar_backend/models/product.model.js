import mongoose, { version } from "mongoose";

const productSchema = mongoose.Schema({
    title: {type: String, required: true, trim: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    images: [       
        {
            url: {
                type: String,   
                required: true
            },
            altText: {
                type: String,
                required: true
            }
        }
    ],
    ratings: {type: Number, required: true}
}, {
    versionKey: false,
    timestamps: true
})

const productModel = mongoose.model("product", productSchema);

export default productModel;