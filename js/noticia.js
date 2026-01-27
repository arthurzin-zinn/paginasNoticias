const urlParams = new URLSearchParams(window.location.search)
const urlNoticia = urlParams.get('id')

fetch("../bancodedados/bancoDeDados.json").then(response => response.json()).then(data =>{
    const noticiaUrl = urlNoticia
    const artigo = data.articles.find((article) => article.id === noticiaUrl);
    
    document.querySelector("#titulo").innerHTML=artigo.titulo;
    document.querySelector("#imagem").src=artigo.imagem;
    document.querySelector("#Autor").innerHTML=artigo.autor;
    document.querySelector("#DATAp").innerHTML=artigo.data_publicacao;
    document.querySelector("#Descricao").innerHTML=artigo.conteudo;
    
})

