

export async function createPost(req, res) {
  try {
    const { userId, title, content } = req.body;
    if (!userId || !title || !content) {
        res.status(400).send(`Bad Request - userId, title, content are required`);
        return;
    }
    res.json(req.body);
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function getAllPosts(req, res) {
  try {
    if(req.query){
      res.json(req.query);
      return;
    }else{
      res.json("returned all Posts");
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function getPostById(req, res) {
  try {
    const postId = req.params.postId;
    if(!postId){
        res.status(404).json(`Bad Request - postId is required`);
        return;
    }

    res.json(req.params.postId);
  } catch (err) {
    res.status(500).send(err);
  }
}


export async function replacePost(req, res) {
  try {
    const { userId, title, content } = req.body;
    const postId = req.params.postId;
    if (!postId ||!userId || !title || !content) {
      res.status(400).send(`userId, title, content are required (full replace)`);
      return;
    }
    res.json(req.body);
  } catch (err) {
    res.status(500).send(err);
  }
}
