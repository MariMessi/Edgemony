const cE = (element) => document.createElement(element);
const qS = (type) => document.querySelector(type);

const tvCardGen = (data) => {
    const serieCardEl = cE ("div");
    const imgEl = cE ("img");

    serieCardEl.className = "card";
    imgEl.className = "card_img";

    if (data.poster_path) {
    imgEl.setAttribute ("src",  `https://image.tmdb.org/t/p/w500/${data.poster_path}`);
    } else { 
        imgEl.setAttribute ("src", "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081")
    };
    imgEl.setAttribute ("alt", data.name);
    
    serieCardEl.appendChild(imgEl);
    return serieCardEl;
};

export { cE, qS, tvCardGen };