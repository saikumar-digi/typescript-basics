// class User{
//     name:string
//     email:string
//    readonly city:string = "bidar"
//     constructor(name:string,email:string){
//         this.name = name,
//         this.email = email
//     }
// }

class User{
    protected _courseCount = 1 
   readonly city:string = "bidar"
    constructor(
        public name:string,
         public email:string,
        //  private userID:string
         )
         {
    }

    // private get DeleteToken(){
    //     console.log("token deleted");
        
    // }

    get getAppleEmail():string {
        return `apple ${this.email}`
    }

     get courseCount() : number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum<=1) {
            throw new Error("course count should be more then 1");    
        }
        this._courseCount = courseNum
    }
}


class SubUser extends User{
    isFamily : boolean = true
    changeCourseCount(){
        this._courseCount = 4 
    }
}


const sai = new User("sai","sai@gmail.com")
// sai.city="bidar"

// sai.DeleteToken();