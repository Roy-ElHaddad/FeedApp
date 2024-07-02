import { makeAutoObservable } from "mobx";

class UserStore {
    user = {};
    constructor(){
        makeAutoObservable(this)
    }
    getUser(){
        this.user
    }
    editUser(newUser){
        this.user = newUser
    }
    clearUser(){
        this.user = {Name:'',LastName:'',avatar:''}
    }
}

export default new UserStore()