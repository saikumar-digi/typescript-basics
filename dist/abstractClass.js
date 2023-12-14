"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getRealTime() {
        return 9;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("getSepia");
    }
}
const saikumar = new Instagram("text", "text", 3);
saikumar.getRealTime();
// const saikumar = new TakePhoto("text","text")
