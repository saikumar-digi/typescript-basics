abstract class TakePhoto{
    constructor(
        public cameraMode :string,
        public filter:string
    ){}

   abstract getSepia():void
   getRealTime():number{
    return 9
   }
}



class Instagram extends TakePhoto{
    constructor(
        public cameraMode :string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter)
    }

    getSepia(): void {
        console.log("getSepia");
        
    }
}
const saikumar = new Instagram("text","text",3)

saikumar.getRealTime()

// const saikumar = new TakePhoto("text","text")