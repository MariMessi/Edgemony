const productsEL = document.querySelector(".product-list");

fetch("https://api.escuelajs.co/api/v1/products") 
  .then(res => res.json())
  .then(data => dataManipulation(data)); 

//    const dataManipulation = data => {
//      data.forEach(item => {
//          console.log(item.title);
//          console.log(item.description);
//          });
//    }; 


const dataManipulation = data => {
    document.textContent = "";
    
    data.forEach((item) => {
        const divContainer = document.createElement("div");
        divContainer.className = "card";
        
        const nameEl = document.createElement("h1");
        nameEl.textContent = item.title;

       const descriptionEl = document.createElement ("p");
       descriptionEl.textContent = item.description;
       
       divContainer.appendChild(nameEl);
       divContainer.appendChild(descriptionEl);
       
       productsEL.appendChild(divContainer);
});
};




