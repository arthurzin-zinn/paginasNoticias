let Comentarios = document.getElementById('comentarios');
const urlParams1 = new URLSearchParams(window.location.search)
const urlNoticia1 = urlParams1.get('id')

const Comenta = localStorage.getItem(urlNoticia1);
Comentarios.innerHTML = Comenta;