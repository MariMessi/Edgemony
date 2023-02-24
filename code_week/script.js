import { GET } from "./api.js";



const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const bodyEl = document.body;
const btn = qS(".button");
const wrapperEl = cE('div');
wrapperEl.className = "wrapperEl";
const highPriority = qS ('alta_priorità');
const important = qS ('importanti');
const lowPriority = qS ('bassa_priorità');


const cardEl = (data) => {
    const cardBoxEl = cE ("div");
    const cardTitleEl = cE ("h3");
    const cardStatusEl = cE ("p");
    const priorityEl = cE ("p");


    cardBoxEl.className = "card";
    cardTitleEl.className = "title";
    cardStatusEl.className = "status";
    priorityEl.className = "priority";


    cardTitleEl.textContent = "Title:  " + data.title;
    cardStatusEl.textContent = "Completed:  " + data.completed;
    priorityEl.textContent = "Priority:  " + `${Math.floor(Math.random() * 6)}`;
    

    if(data.completed === "true")cardBoxEl.classList.add("card_completed");
    if(priorityEl >= 5 && priorityEl <= 4)cardBoxEl.classList.add("highPriority");
    if(priorityEl >= 3 && priorityEl <= 2)cardBoxEl.classList.add("important");
    if(priorityEl >= 1 && priorityEl <= 0)cardBoxEl.classList.add("lowPriority");
    
    
    btn.addEventListener("click", () => {
        if (cardStatusEl === true) wrapperEl.appendChild(cardEl)
    });


    cardBoxEl.append(cardTitleEl, cardStatusEl, priorityEl);

    return cardBoxEl
};






GET("todos").then((data) => 
data.map((todo) => wrapperEl.appendChild(cardEl(todo))));

bodyEl.appendChild(wrapperEl);




GET("todos").then((data) =>
data.map((todo) => (({ todos }) => {
    const priorityStatusEl = todos.map ((todo) => todo.priorityEl);

highPriority = {
   priorityEl: priorityStatusEl.filter((priority) >= 5 && priorityEl <= 4)
};
  important = {
   priorityEl: priorityStatusEl.filter((priority) >= 3 && priorityEl <= 2)   
};
    lowPriority = {
   priorityEl: priorityStatusEl.filter((priority) >= 1 && priorityEl <= 0)
}

})))










