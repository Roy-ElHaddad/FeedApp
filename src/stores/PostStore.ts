import data from '@/src/data/Posts.json';
import { makeAutoObservable } from "mobx";

class PostStore {
    posts = [];
    constructor(){
        makeAutoObservable(this)
    }
    getPosts(){
        this.posts = [...data]
    }
    addPost(post){
        this.posts.push(post)
    }
    editPost(newPost){
        const postIndex = this.posts.findIndex(post => post.id === newPost.id)
        this.posts[postIndex] = newPost
    }
    deletePost(id){
        const array = this.posts.filter((post) => post.id !== id)
        this.posts = array
    }
}

export default new PostStore()