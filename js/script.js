


function procurar(entradaU, entradaS) {
    fetch("../BancoDeDados/Usuarios.json").then(response => response.json()).then(data => {
        //alert(JSON.stringify(data));
        const Usuario = data.find((user) => user.usuario === entradaU && user.senha === entradaS);
        //alert(JSON.stringify(Usuario));
        if (Usuario == undefined){
            alert("usuario e senha não encotrado")
        } else {
            localStorage.setItem("nome", entradaU);
            localStorage.setItem("isLogged" , "true");
            localStorage.setItem("data", new Date());
            window.location.href = './noticias.html';
        }

    })
}

function logar(){
    user = document.querySelector("#usuario").value;
    pass = document.querySelector("#senha").value;

    procurar(user, pass);
}