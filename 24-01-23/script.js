import { GET } from "./api.js";

const cE = (type) => document.createElement(type);

const cardIdEl = (data) => {
    const cardBoxEL = cE("div");
    const textBoxEL = cE ("div");
    const ImgBoxEl = cE ("div");
    const nameEL = cE ("h2");
    const surnameEl = cE ("h2");
    const emailEl = cE ("p");
    const telNumEL = cE ("p");
    const imgEl = cE ("img");

    cardBoxEL.className = "box";
    ImgBoxEl.className = "img-box";
    textBoxEL.className = "text-box";
    nameEL.textContent = "Name: " + data.firstName;
    surnameEl.textContent = "Surname: " + data.lastName;
    emailEl.textContent = "Email: " + data.email;
    telNumEL.textContent = "Phone: " + data.phone;
    imgEl.setAttribute ("src", data.image);
    imgEl.setAttribute("alt", data.firstName);

    textBoxEL.append(nameEL, surnameEl, emailEl, telNumEL,)
    ImgBoxEl.appendChild(imgEl);
    cardBoxEL.append(textBoxEL, ImgBoxEl);
    return cardBoxEL;
}; 


const bodyEL = document.body;

GET("users").then((data) => 
 data.users.map((user) => bodyEL.appendChild(cardIdEl(user))))