const postForm = document.queryselector("#postForm");
const inputTitle = document.queryselector("#title");
const inputPrice = document.querySelector("#price");
const inputCategory = document.querySelector("#category");
const inputDescription =document.querySelector("#description");
const inputImage = document.querySelector("#image");


const categoryForm = document.querySelector("#categoryForm");
const categoryName = document.querySelector("#categoryName");
const categoryImage = document.querySelector("#categoryImage");

const deleteProductForm = document.querySelector("#deleteProductForm");
const inputIdProduct = document.querySelector("#productId");

categoryForm.addEventListener ("submit", event =>{
    event.preventDefault();


  const newObj = {
     name: categoryName.value,
     image: categoryImage.value,
   };

  console.log(newObj);
   funzionePost(newObj, "categories");
 });


 postForm.addEventListener("submit", (event) =>{
    const method = event.target[0].value;
    const idProduct = "/" + event.target[1].value
        event.preventDefault();

 if (parseInt(inputCategory.value) <1) {
     alert("deve essere maggiore di 0");
    return;
 };

 const newObj = {
   price: parseInt(inputPrice.value),
   title: inputTitle.value,
   description: inputDescription.value,
   Id: parseInt(inputCategory.value),
   images: inputImage.value,
 };
  console.log(newObj);
 funzionePost(newObj, "products");
 if (method === "POST") {
    funzionePost(newObj, "products", method);
 } else {
    funzionePost(newObj), "products", method, idProduct
 }
 });

 deleteProductForm.addEventListener("submit", event => {
    event.preventDefault();

    elimina("products", inputIdProduct.value);
  });

categoryForm.addEventListener ("submit", (event) => {
    event.preventDefault();
    const newCat = {
        name: inputTitle.value,
        price: parseInt(inputPrice.value),
        id: parseInt(inputCategory.value),
        description: inputDescription.value,
        image: inputImage.value,
    };
    console.log(newCat)
    funzionePost(newCat, "category");
});



const funzionePost =(Catbody, param) => {
    fetch("https://api.escuelajs.co/api/v1/products" + param, {
        method: "POST",
        Headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(Catbody),
    })
    .then (res => res.json())
    .then (data => {
        console.log(data);
        if (data.statusCode >= 50 && data.statusCode < 70) {
            alert (
                "${param} Non è stato correttamente caricato" + data.message[0]
            );
            } else { 
                alert ("{$param} Correttamente caricato :)")};
            console.log(data);
        })
     
    };


    






