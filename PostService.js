import Post from "./Post.js";
import FileService from "./FileService.js";

class PostService {
    async create(post, picture) {
        const fileName = FileService.saveFile(picture);
        const created_post = await Post.create({...post, picture: fileName});
        return created_post;
    }

    async getAll() {
        const posts = await Post.find();
        return posts;
    }

    async getOne(id) {
        if (!id) {
            throw new Error("ID is not improved");
        }
        const post = await Post.findById(id);
        return post;
    }

    async update(post) {
        if (!post._id) {
            throw new Error("ID is not improved");
        }
        const updated_post = await Post.findByIdAndUpdate(post._id, post, {new: true});
        return updated_post;
    }

    async delete(id) {
        if (!id) {
            throw new Error("ID is not improved");
        }
        const deletedPost = await Post.findByIdAndDelete(id);
        return deletedPost;
    }
}

export default new PostService();