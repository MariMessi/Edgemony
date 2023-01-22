const postForm = document.queryselector("#postForm");
const inputIdProduct = document.querySelector("#productId");

const funzioneDelete = () => {
fetch("https://api.escuelajs.co/api/v1", {
method: "DELETE"
})
.then(res=>res.json())
.then(data=>console.log(data))
}