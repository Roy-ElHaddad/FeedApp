import data from '@/src/data/Posts.json';
import type { Post } from '@/src/types';
import { makeAutoObservable } from "mobx";

class PostStore {
    posts:Post[] = [];
    constructor(){
        makeAutoObservable(this)
    }
    getPosts(){
        this.posts = [...data] as unknown as Post[]
    }
    addPost(post: Post){
        this.posts.push(post)
    }
    editPost(newPost: Post){
        const postIndex = this.posts.findIndex(post => post.id === newPost.id)
        this.posts[postIndex] = newPost
    }
    deletePost(id: number){
        const array = this.posts.filter((post:Post) => post.id !== id)
        this.posts = array
    }
}

export default new PostStore()