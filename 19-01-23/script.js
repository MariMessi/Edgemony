const hamburgerBtn = document.querySelector(".hamburger")
const tendina = document.querySelector(".tendina");
const productsEL = document.querySelector(".product-list");



const cart = [];


fetch("https://api.escuelajs.co/api/v1/products") 
  .then(res => res.json())
  .then(data => data.forEach(element => {
    cardCreator(element);
  })
  ); 

const cardCreator = item => {
    const cardEl = document.createElement("div")
    cardEl.className = "card";
       // Riduzione dei caratteri a 10 per l'<h1> e a 30 per il <p> //   
        const nameEl = document.createElement("h1");
        nameEl.textContent = item.title;
        nameEl.textContent = item.title.substring (0, 11);

       const descriptionEl = document.createElement ("p");
       descriptionEl.textContent = item.description;
       descriptionEl.textContent = item.description.substring (0, 31);

       const imgEl = document.createElement ("img");
       imgEl.className = "img";
       imgEl.setAttribute("src", item.images);
       imgEl.setAttribute("alt", "#");

       const priceEl = document.createElement ("p");
       priceEl.className = "price";
       priceEl.textContent = item.price;

       const cartBtn = document.createElement ("button");
       cartBtn.textContent = "Add to cart";

       
       function mostraMessaggio() {
       window.alert("abbiamo aggiunto i tuoi oggetti al carrello");
       };
       // Alert //
       cartBtn.addEventListener("click", () => {
        cart.push(item);
        cartCreation();
        mostraMessaggio()
       })



       cardEl.append(nameEl, imgEl, descriptionEl, priceEl, cartBtn);

       
       productsEL.appendChild(cardEl);
};




const cartCreation = () => {
tendina.innerHTML = "",
cart.forEach((item, index) => {
  const cartEl = document.createElement("div");
  cartEl.className = "cartRow";
  cartEl.innerHTML = '<p>q.ty. ${item.qty}</p><p>${item.title}</p><p>${item.price}</p>';
  
  const deleteBtn = document.createElement ("button");
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", () => {
    cartEl.remove();
    cart.splice(index, 1);
  })

  cartEl.appendChild(deleteBtn);
  tendina.appendChild(cartEl)
});
};

const cartPopulator = item => {
  const newObj = {
    id: item.id,
    title: item.title,
    price: item.price,
    qty: 1,
  };

  const search = cart.filter(element => {
    if (element.id === newObj.id) {
      element.qty++;
      return element;
    }
  });

  if (search.length === 0) {
    cart.push(newObj);
  }

  console.log(cart);
  cartCreation();
};



