// the put method 
const form = document.queryselector("#postForm");
const categoryForm = document.querySelector("#categoryForm");
const categoryName = document.querySelector("#categoryName");
const categoryImage = document.querySelector("#categoryImage");


const funzionePut = () => {
fetch ("https://api.escuelajs.co/api/v1"), {
    method: "PUT",
    Headers:{"content-type": "application/json"},
    body: JSON.stringify(Catbody)
}
.then(response=>response.json())
.then(data=>console.log(data));
};


