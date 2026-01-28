
export async function createComment(req, res){
    try{
        const {postId, senderId, message} = req.body;
    
        if(!postId || !senderId || !message){
            res.status(400).send(`postId, senderId, message are required`);
            return;
        }
        res.json(req.body);
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
        res.json(req.body);
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
        res.json(updatedData);
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
        res.json(commentId);
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
