const start = document.querySelector(".start-btn");
const stop = document.querySelector(".stop-btn");
const seconds = document.querySelector(".sec");
const minutes = document.querySelector(".min");
const hours = document.querySelector(".hour");
const break_time = document.querySelector(".break-btn");

// ``````````````````````````````````````````````````````````````````````````````


let sec = 0;
let min = 0;
let hour = 0;



// ``````````````````````````````````````````````````````````````````````````````
start.addEventListener("click", () => {

    function greet() {
        sec+=1;
        seconds.innerHTML = sec;
        
        if (sec%60 == 0) {
            sec = 0;
            min += 1;
            minutes.innerHTML = min;
        
            if (min%60 == 0) {
                min = 0;
                hour += 1;
                hours.innerHTML = hour;
            }

        }
    }
    const interval = setInterval(greet, 1000);
    stop.addEventListener("click", () => {
        clearInterval(interval);
    })
})
