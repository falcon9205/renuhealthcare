import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    post: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }, 
    updatedAt: { type: Date, default: Date.now },
});


const userModal = mongoose.model("user", userSchema);

export default userModal;