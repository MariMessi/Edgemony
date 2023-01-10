const createCard = (imgEl, cardEl,titeEl,descriptiomEl) => {
const bodyEl = document.body;
const cardEl = document.createElement ("hero");
const imgEl = document.createElement ("img");
const titleEl = document.createElement ("h1");
const descriptiomEl = document.createElement ("p");


cardEl.className = "hero"

imgEl.className = "hero_img";
imgEl.setAttribute ("src", "https://picsum.photos/400/500");
imgEl.setAttribute ("alt", "hero img");

titeEl.className = "hero_title";
titeEl.setAttribute ("h1", "Explore with us")

descriptiomEl.className = "hero_description";
descriptiomEl.setAttribute ("p", "Scopri i nostri magici viaggi, non precuderti la possibilità di vivere esperienze irripetibili!");


cardEl.append(imgEl, titeEl,descriptiomEl);

}

