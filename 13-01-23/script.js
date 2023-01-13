
const firstBtnEl = document.querySelector(".first-btn");
const secondBtnEl = document.querySelector(".second-btn");
const thirdBtnEL = document.querySelector(".third-btn");


const imgs = ["img-1.jpg", "img-2.jpg", "img-3.jpg"]


firstBtnEl.addEventListener("click", () => {
    imgEl.setAttribute ("src", ".img-1.jpg");
    firstBtnEl.style.backgrounColor = "green";
    });

secondBtnEl.addEventListener("click", () => {
    imgEl.setAttribute("src", ".img-2.jpg");
    secondBtnEl.style.backgrounColor = "green";
    firstBtnEl.style.backgrounColor = "none"
    thirdBtnEl.style.backgrounColor = "none";
});
thirdBtnEl.addEventListener("click", () => {
    imgEl.setAttribute("src", ".img-3.jpg");
    thirdBtnEl.style.backgrounColor = "green";
    firstBtnEl.style.backgrounColor = "none"
    secondBtnEl.style.backgrounColor = "none";
});



