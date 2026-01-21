const usuario = localStorage.getItem("nome");
const logado = localStorage.getItem("isLogged");
let data = localStorage.getItem("data");


if (usuario === undefined || usuario === "" || usuario === null) {
    window.location.href = "./index.html";
}

if (logado === undefined || logado === "" || logado == "false" || logado === null) {
    window.location.href = "./index.html"
}

if (data != undefined || data === null) {
    const dhoje = new Date();
    let dmes = data.getDate() + 30;
    let dlimite = data.setDate(dmes); 
    if(dhoje > dlimte) {
        window.location.href = "./index.html"

    }

}

document.querySelector("#usuario").innerHTML = usuario;