import mongoose, { version } from "mongoose";

const cartSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "user", required: true},
    items: [
        {
            productId: {type: mongoose.Schema.Types.ObjectId, ref: "product", required: true},
            quantity: {type: Number, default: 1, required: true}
        }
    ]
}, {
    versionKey: false,
    timestamps: true
})

const cartModel = mongoose.model("cart", cartSchema);

export default cartModel;