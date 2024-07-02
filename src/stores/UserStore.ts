import type { User } from '@/src/types';
import { makeAutoObservable } from "mobx";

class UserStore {
    user: User | undefined = undefined;
    constructor(){
        makeAutoObservable(this)
    }
    getUser(){
        this.user 
    }
    editUser(newUser: User){
        this.user = {...newUser}
    }
    clearUser(){
        this.user = undefined
    }
}

export default new UserStore()