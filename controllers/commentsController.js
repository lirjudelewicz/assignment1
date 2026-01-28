import { commentModel } from "../model/commentModel.js";


export async function createComment(req, res){
    try{
        const {postId, senderId, message} = req.body;
    
        if(!postId || !senderId || !message){
            res.status(400).send(`postId, senderId, message are required`);
            return;
        }
        const newComment = await commentModel.create({
            postId, senderId, message
        });
        console.log(`Succesfully added a new comment id: [${newComment._id}] to post id: [${postId}]`);
        res.json(newComment);
    }catch(err){
        res.status(500).send(`Error creating comment ended with error: ${err.message}`);
    }
}


export async function readCommentById(req, res){
    try{
        const commentId = req.params.commentId;
        if(!commentId){
            res.statusCode = 400;
            res.status(400).send(`Bad Request - commentId required`);
            return;
        }
        const comment = await commentModel.findById(commentId);
        console.log(`Succesfully got comment id: [${commentId}]`);
        res.json(comment);
    }catch(err){
        res.status(500).send(`Error reading comment ended with error: ${err.message}`);
    }
    
}

export async function updateComment(req, res, next){
    try{
        const commentId = req.params.commentId;
        const updatedData = req.body;
        if(!commentId || !updatedData.postId || !updatedData.senderId || !updatedData.message){
            res.statusCode = 400;
            res.status(400).send(`Rejecting - commentId, postId, senderId, message are required`);
            return;
        }
        const comment = await commentModel.findByIdAndUpdate(commentId, updatedData, {new: true});
        console.log(`Succesfully updated comment id: [${commentId}]`);
        res.json(comment);
    }catch(err){
        res.status(500).send(`Error reading comment ended with error: ${err.message}`);
    }
}

export async function deleteComment(req, res, next){
    try{
        const commentId = req.params.commentId;
        if(!commentId){
            res.statusCode = 400;
            res.status(400).send(`Rejecting - commentId required`);
            return;
        }
        const deletedComment = await commentModel.findByIdAndDelete(commentId);
        console.log(`Succesfully deleted comment id: [${commentId}]`);
        res.json(deletedComment);
    }catch(err){
        res.status(500).send(`Error deleting comment ended with error: ${err.message}`);
    }
}

export async function getCommentsByPostId(req, res, next){
    try{
        const postId = req.params.postId;
        if(!postId){
            res.statusCode = 400;
            res.status(400).send(`Bad Request - postId required`);
            return;
        }
        const comments = await commentModel.find({postId: postId}).sort({ createdAt: -1 });
        res.json(comments);
    }catch(err){
        res.status(500).send(`Error deleting comment ended with error: ${err.message}`);
    }
}
