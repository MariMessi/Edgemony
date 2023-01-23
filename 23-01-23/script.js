import {cE, qS, QuoteCardEl} from "./utils.js";


const bodyEl = qS("body");
const wrapperEl = cE("div");
wrapperEl.className = "quote-wrapper";
bodyEl.appendChild(wrapperEl);


fetch("https://dummyjson.com/quotes/random")
.then(res => res.json())
 .then((data) => wrapperEl.appendChild(QuoteCardEl(data))
 )
.then(console.log);




 const GET = async (endpoint)=> {
     const res = await fetch(BASE_URL + endpoint);
     const data = await res.json();
     return data;
 };

