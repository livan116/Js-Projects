const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

const stopwatch = document.querySelector(".stopwatch");

let condition = false;

let min = 0;
let hr = 0;
let sec = 0;
let ms = 0;
let t;

start.addEventListener("click", () => {
  stopWatch();
  start.setAttribute("disabled", true);
});

function stopWatch() {
  t = setInterval(() => {
    ms++;
    if (ms == 100) {
      sec++;
      ms = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hr++;
      min = 0;
    }

    stopwatch.textContent =
      (hr < 10 ? "0" : "") +
      hr +
      ":" +
      (min < 10 ? "0" : "") +
      min +
      ":" +
      (sec < 10 ? "0" : "") +
      sec +
      ":" +
      (ms < 10 ? "0" : "") +
      ms;
  }, 10);
}

stop.addEventListener("click", () => {
  clearInterval(t);
  start.removeAttribute("disabled");
});

reset.addEventListener("click", () => {
  clearInterval(t);
  ms = 0;
  sec = 0;
  min = 0;
  hr = 0; 
  stopwatch.textContent = "00:00:00:00";
  start.removeAttribute("disabled");
});
