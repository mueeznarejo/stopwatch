function Stopwatch() {
    let startTime, stopTime, duration = 0, running;

    this.start = function () {
        if (running) {
            throw new Error("Stopwatch has already started.")
        }
        
        running = true;
        startTime = new Date().getTime() - duration;

        this.countingInterval = setInterval(this.render, 1000)
    }
    this.stop = function () {
        if (!running) {
            throw new Error("Stopwatch is not started.");
        }
        running = false;
        stopTime = new Date();

        let seconds = stopTime.getTime() - startTime;
        duration = seconds;

        clearInterval(this.countingInterval);
    }
    this.reset = function () {
        startTime = null;
        stopTime = null;
        duration = 0;
        running = false;

        hr.innerHTML = "00";
        min.innerHTML = "00";
        sec.innerHTML = "00";

        clearInterval(this.countingInterval);
    }
    this.render = function () {
        let now = new Date();
        // FOrmating the time
        let distance = now.getTime() - startTime;
        // seconds
        let seconds = Math.floor(distance / 1000) % 60;
        sec.innerHTML = seconds < 10 ? "0" + seconds : seconds;
        // minutes
        let minutes = Math.floor((distance / 1000) / 60) % 60;
        min.innerHTML = minutes < 10 ? "0" + minutes : minutes;
        // hours
        let hours = Math.floor(((distance / 1000) / 60) / 60) % 24;
        hr.innerHTML = hours < 10 ? "0" + hours : hours;
    }
    
    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    })
}

let sw = new Stopwatch();