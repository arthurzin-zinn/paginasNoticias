function comentar() {
    const comentario = document.getElementById("newComent").value;
    const nome = localStorage.getItem(nome);
    const data = new Date();

    const novaDivComentario = document.createElement('div');
    novaDivComentario.innerHTML = `
    <div style="display: flex;">
        <p>${nome}</p>
        <p>${data}</p>
    </div>

    <p>${comentario}</p>
    `;

    document.querySelector('comentarios').appendChild(novaDivComentario);
}