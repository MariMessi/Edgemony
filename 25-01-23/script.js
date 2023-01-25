import { cE, qS, guestCardEl } from "./utils.js";
import myJson from "./mock.json" assert {type: "json"};
console.log(myJson)


const bodyEl = qS ("body");
const guestbookEl = cE("div");
guestbookEl.className = "guestbook";








myJson.guests.map((guest) => bodyEl.appendChild(guestCardEl(guest)));









