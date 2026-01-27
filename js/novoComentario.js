function comentar() {
    const comentario = document.getElementById("newComent").value;
    const nome = localStorage.getItem("nome");
    const data = new Date();
    

    if (comentario === '' ) {
        alert("voce não escreveu nada")
    } else {
        const novaDivComentario = document.createElement('div');
        novaDivComentario.innerHTML = `
                <div>
                    <p style="margin-right: 5px; font-family: sans-serif;">${nome}</p>
                    <p style="font-family: sans-serif; font-size: 14px; color:grey;">${data}</p>
                </div>

                <p style="font-family: sans-serif;">${comentario}</p>
        `;

            document.getElementById('comentarios').appendChild(novaDivComentario);
            const urlParams = new URLSearchParams(window.location.search)
            const urlNoticia = urlParams.get('id')
            const Coment = document.getElementById('comentarios').innerHTML;
            localStorage.setItem(urlNoticia, Coment);
    }


}