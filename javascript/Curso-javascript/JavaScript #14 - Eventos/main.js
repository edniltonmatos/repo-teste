// EVENTOS 

// .addEventListener

const nome = document.querySelector("#name")

nome.addEventListener("input", (e) =>{
    console.log(e.target.value)
})
