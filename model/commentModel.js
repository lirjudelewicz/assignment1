import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    postId: {
        type: String, 
        required: true,
        trim: true
    },
    senderId: {
        type: String, 
        required: true,
        index: true
    },
    message: {
        type: String, 
        required: true,
    }
});

export const commentModel = mongoose.model("Comment", CommentSchema);