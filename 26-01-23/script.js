const bodyEl = document.body;
bodyEl.className = "bodyEl"
const timerDv = document.createElement("div");
timerDv.className = "timer-div";
const timerEl = document.createElement("h1");
timerEl.className = "timer";
const stopBtnEl = document.createElement("button");
stopBtnEl.className = "btn";
stopBtnEl.textContent = "STOP"

timerDv.append(timerEl, stopBtnEl);
bodyEl.append(timerDv);


const interval = setInterval(() => {
  timerEl.textContent = `${new Date().getSeconds()}`;
}, 1000);



let timeout = 10;


setInterval(() => {
  if (timeout === 0) {
    bodyEl.style.backgroundColor = "lightseagreen";
    timerEl.remove();
  } else {
    timeout--;
    timerEl.textContent = timeout;
  }
 }, 1000);


stopBtnEl.addEventListener("click", () => clearInterval(interval));




