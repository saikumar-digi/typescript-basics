"use strict";
// class User{
//     name:string
//     email:string
//    readonly city:string = "bidar"
//     constructor(name:string,email:string){
//         this.name = name,
//         this.email = email
//     }
// }
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this._courseCount = 1;
        this.city = "bidar";
    }
    // private get DeleteToken(){
    //     console.log("token deleted");
    // }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more then 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const sai = new User("sai", "sai@gmail.com");
// sai.city="bidar"
// sai.DeleteToken();
