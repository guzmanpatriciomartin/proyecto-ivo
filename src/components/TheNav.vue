<template>
    <div>
      <header>
    <a href="./index.html" class="logo">IVO</a>
    <ul>
      <li><a href="./index.html">INICIO</a></li>
      <li><a href="#tienda">TIENDA</a></li>
      <li><a href="./asesoria.html">ASESORIA</a></li>
      <li><a href="#">NOSOTROS</a></li>
      <li><a href="#">BLOG</a></li>
    </ul>
  </header>  
    </div>
</template>
<script>
// Importamos JQuery
const $ = require('jquery')
// Lo declaramos globalmente
window.$ = $
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
}) 
export default {
  name: 'TheNav',
}
</script>
