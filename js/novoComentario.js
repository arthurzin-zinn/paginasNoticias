function comentar() {
    const comentario = document.getElementById("newComent").value;
    const nome = localStorage.getItem("nome");
    const data = new Date();

    const novaDivComentario = document.createElement('div');
    novaDivComentario.innerHTML = `
    <div>
        <p style="margin-right: 5px; font-family: sans-serif;">${nome}</p>
        <p style="font-family: sans-serif; font-size: 14px; color:grey;">${data}</p>
    </div>

    <p>${comentario}</p>
    `;

    document.getElementById('comentarios').appendChild(novaDivComentario);
}