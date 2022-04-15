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
<style >
header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.6s;
    padding: 2% 10%;
    z-index: 100;
}
.logo{
        position: relative;
        font-weight: 700;
        color: rgb(0, 0, 0);
        text-decoration: none;
        font-size: 2em;
        text-transform: uppercase;
        letter-spacing: 2px;
        transition: 0.6s;
}

.ul{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
}
.li{
            position: relative;
            list-style: none;
}
.a{
                position: relative;
                margin: 0 15px;
                text-decoration: none;
                color: rgb(0, 0, 0);
                letter-spacing: 2px;
                font-weight: bolder;
                transition: 0.6s;
            }

.banner{
       
        width: 100%;
        height: 100vh;
        background-image: url(../img/depositphotos_395608384-stock-photo-abstract-wallpaper-background-grunge-gray.webp);
        background-attachment: fixed;
        background-repeat: no-repeat;   
        background-size: cover;
        padding-top: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        
}   

.sticky{
    padding: 1% 10%;
    background: #000000;
}
.logo{
        color: #ffffff;
}
.ul li a {
        color: #ffffff;
}
.tienda-fixed{
    
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 57px;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 89%, rgba(0,212,255,0) 95%);

}

#imgPresentacion{
    display: flex;
    justify-content: center;
    align-items: center;
}    
.borderRatio{
        background-image: url(https://d1fdloi71mui9q.cloudfront.net/D0qKJXDxTO900eYwLPJS_FV7KRjXc40VD1IxO);
        background-size: cover;
        background-position: center;
        position: relative;
        height: 500px;
        width: 500px;
}
.col-md-4{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>