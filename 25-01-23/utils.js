const cE = (element) => document.createElement(element);
const qS = (type) => document.querySelector(type);
 
const guestCardEl = (data) => {
    const guestCard = cE("div");
    const infoEl = cE("div");
    const messageRatEl = cE("div");
    const nameEl = cE ("h3");
    const ageEl = cE ("h2");
    const roomNumEl = cE ("p");
    const messageEl = cE ("p");
    const ratingEl = cE("p");


    guestCard.className = "guest-card";
    infoEl.className = "info-el";
    messageRatEl.className = "message-rate-el";
    nameEl.className = "h3";  
    ageEl.className = "age";
    roomNumEl.className = "room-num";
    messageEl.className = "message";
    ratingEl.className = "rating";
    
    nameEl.textContent = "Name:  " + data.name;
    ageEl.textContent = "Age:  " + data.age;
    roomNumEl.textContent = "Room N.  " + data.roomNumber; 
    messageEl.textContent = "Message:  " + data.guestMessage; 
    ratingEl.textContent = "Rating: " + data.rating + "  ❤️";


    infoEl.append( nameEl, ageEl, roomNumEl );
    messageRatEl.append( messageEl, ratingEl );
    guestCard.append( infoEl, messageRatEl );
    
    return guestCard
    

}



export { cE, qS, guestCardEl };