import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {
    async create(req, res) {
        try {
            console.log(req.files);
            const post = await PostService.create(req.body, req.files.picture);
            res.json(post);    
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            return res.json(posts);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id);
            return res.json(post);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const updated_post = await PostService.update(req.body);
            return res.json(updated_post);
        } catch(e) {
            res.status(500).json(e.message);
        }
    }

    async delete(req, res) {
        try {
            const deletedPost = await PostService.delete(req.params.id);
            return res.json(deletedPost);
        } catch(e) {
            res.status(500).json(e);
        }
    }
}

export default new PostController();