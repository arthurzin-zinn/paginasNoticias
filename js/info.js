//const dados =
  //  fetch("../bancodedados/bancoDeDados.json").then(response => response.json()).then(data => {
    //    const procurar = data.articles.find((Noticia) => Noticia.noticias ===)
      //  const Imagem = document.getElementsByClassName('Div');
        //const Titulo = document.getElementsByClassName('Titulo');
       // const Autor= document.getElementsByClassName('Autor');
       // const DataP = document.getElementsByClassName('DataP');
       // const Resumo = document.getElementsByClassName('Resumo');

       // Titulo.InnerHTML = `
       // <p>${data.titulo}</p>
       // `
   // })

fetch("../bancodedados/bancoDeDados.json").then(response => response.json()).then(data => {
    
    const noticias = document.querySelector('#intems');
    data.articles.forEach( article =>
        {
            const noticia = document.createElement('div');
            noticia.innerHTML = `
            <a id="componentes" href="./noticia.html?id=${article.id}" target="_blank">
                <div class="Div" style="width: 400px; height: 300px; position: relative; margin: 0px 20px 0px 20px; background-image: url(${article.imagem})">
                    <div class="teste" style="position: absolute; width: 400px; height: 100px; z-index: 1; background-color:white; top: 200px; border-radius: 29px;">
                    <div class="texto">
                        <h2 id="Titulo">${article.titulo}</h2>
                        <p id="Autor">${article.autor}</p>
                        <p id="DataP">${article.data_publicacao}</p>
                        <p id="Resumo">${article.resumo}</p>
                    </div>    
                    </div>
                </div>
            </a>
            `;

            noticias.appendChild(noticia);
        }

    )
}
)