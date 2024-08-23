import mongoose, { version } from "mongoose";

const userSchema = mongoose.Schema({
    userName: {type: String, required: true, unique: true, trim: true},
    email: {type: String, required: true, unique: true, lowercase: true, trim: true},
    password: {type: String, required: true},
    fullName: {type: String, required: true, trim: true},
    role: {type: String, default: "user", enum: ["user", "admin"], required: true},
}, {
    versionKey: false,
    timestamps: true
})

const userModel = mongoose.model("user", userSchema);

export default userModel;