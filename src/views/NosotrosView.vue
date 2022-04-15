<template>
  <div id="app">
    <TheNav/>
    <TheSectionN/>
    <TheCardsN/>
    <TheSectionN2/>
    <TheCards2/>
    <TheSectionN3/>
    <div id="feed">
    <TheCardsN v-for="(item, index) in products" :key="index"
		:image= item.thumbnail
		:title= item.title
    :price= item.price
    :id= item.id />
    <h1>Muchas gracias!!</h1>
    </div>
  </div>
</template>
<script>
  // import { mapState, mapMutations } from 'vuex'
  import TheNav from '../components/TheNav.vue'
  import TheSectionN from '../components/TheSectionN.vue'
  import TheCardsN from '../components/TheCardsN.vue'
  import TheSectionN2 from '../components/TheSectionN2.vue'
  import TheCards2 from '../components/TheCards2.vue'
  import TheSectionN3 from '../components/TheSectionN3.vue'
export default {
  name: 'NosotrosView',
  components: {
  TheNav,
  TheSectionN,
  TheCardsN,
  TheSectionN2,
  TheCards2,
  TheSectionN3,
}
}
</script>
<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-transition: 0.6s;
  transition: 0.6s;
  padding: 2% 10%;
  z-index: 100;
}

header .logo {
  position: relative;
  font-weight: 700;
  color: black;
  text-decoration: none;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
  -webkit-transition: 0.6s;
  transition: 0.6s;
}

header ul {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

header ul li {
  position: relative;
  list-style: none;
}

header ul li a {
  position: relative;
  margin: 0 15px;
  text-decoration: none;
  color: black;
  letter-spacing: 2px;
  font-weight: bolder;
  -webkit-transition: 0.6s;
  transition: 0.6s;
}
// ------------------navsass-----------
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

    ul{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        li{
            position: relative;
            list-style: none;

            a{
                position: relative;
                margin: 0 15px;
                text-decoration: none;
                color: rgb(0, 0, 0);
                letter-spacing: 2px;
                font-weight: bolder;
                transition: 0.6s;
            }
        }
    }
}

.banner{
       
        width: 100%;
        height: 100vh;
        background-image: url(../img/depositphotos_395608384-stock-photo-abstract-wallpaper-background-grunge-gray.webp);
        background-attachment: fixed;
        background-repeat: no-repeat;   
        background-size: cover;
        // padding-top: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        
}   

.sticky{
    padding: 1% 10%;
    background: #000000;

    .logo{
        color: #ffffff;
    }

    ul li a {
        color: #ffffff;
    }
    
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
    
    .borderRatio{
        background-image: url(https://d1fdloi71mui9q.cloudfront.net/D0qKJXDxTO900eYwLPJS_FV7KRjXc40VD1IxO);
        background-size: cover;
        background-position: center;
        position: relative;
        height: 500px;
        width: 500px;
    }
}

.col-md-4{
    display: flex;
    justify-content: center;
    align-items: center;
}
.banner {
  width: 100%;
  height: 100vh;
  background-image: url(../img/depositphotos_395608384-stock-photo-abstract-wallpaper-background-grunge-gray.webp);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.sticky {
  padding: 1% 10%;
  background: #000000;
}

.sticky .logo {
  color: #ffffff;
}

.sticky ul li a {
  color: #ffffff;
}

#imgPresentacion {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

#imgPresentacion .borderRatio {
  background-image: url(https://d1fdloi71mui9q.cloudfront.net/D0qKJXDxTO900eYwLPJS_FV7KRjXc40VD1IxO);
  background-size: cover;
  background-position: center;
  position: relative;
  height: 500px;
  width: 500px;
}

.col-md-4 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.borderRatio{
  border-radius: 50%;
}
.btn-flotante {
  font-size: 16px; /* Cambiar el tamaño de la tipografia */
  text-transform: uppercase; /* Texto en mayusculas */
  font-weight: bold; /* Fuente en negrita o bold */
  color: #ffffff; /* Color del texto */
  border-radius: 5px; /* Borde del boton */
  letter-spacing: 2px; /* Espacio entre letras */
  background-color: #000000; /* Color de fondo */
  padding: 18px 30px; /* Relleno del boton */
  position: fixed;
  bottom: 40px;
  right: 40px;
  transition: all 300ms ease 0ms;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  z-index: 99;
  }
  .btn-flotante:hover {
  background-color: #696969; /* Color de fondo al pasar el cursor */
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
  transform: translateY(-7px);
  }
  
@media screen and (max-width: 767px) {
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-transition: 0.6s;
    transition: 0.6s;
    padding: 2% 3%;
    z-index: 100;
  }
  header .logo {
    position: relative;
    font-weight: 700;
    color: black;
    text-decoration: none;
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    -webkit-transition: 0.6s;
    transition: 0.6s;
  }
  header ul {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  header ul li {
    position: relative;
    list-style: none;
    padding: 10px;
  }
  header ul li a {
    position: relative;
    margin: 0 15px;
    text-decoration: none;
    color: #080808;
    letter-spacing: 2px;
    font-weight: 500px;
    -webkit-transition: 0.6s;
    transition: 0.6s;
  }
  header ul li a i {
    color: #000000;
  }
  .banner {
    width: 100%;
    height: 100vh;
    background-image: url(../img/depositphotos_395608384-stock-photo-abstract-wallpaper-background-grunge-gray.webp);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 30%;
  }
  .sticky {
    padding: 1% 3%;
    background: #000000;
  }
  .sticky .logo {
    color: #ffffff;
  }
  .sticky ul li a {
    color: #ffffff;
  }
  #imgPresentacion {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .jumbotron {
    text-align: center;
    color: #000000;
  }
  #imgPresentacion {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  #imgPresentacion .borderRatio {
    background-image: url(https://d1fdloi71mui9q.cloudfront.net/D0qKJXDxTO900eYwLPJS_FV7KRjXc40VD1IxO);
    background-size: cover;
    position: relative;
    height: 325px;
    width: 325px;
  }
  .btn-flotante {
  font-size: 14px;
  padding: 12px 20px;
  bottom: 20px;
  right: 20px;
  }
  }
  .dlg3Sd{
   background-color:  #ffffff;
}

* {
  margin: 0%;
  padding: 0%;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif !important;
}

html {
  background-color: #fff;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

body {
  min-height: 200vh;
}

ul {
  padding: 0% !important;
  margin: 0% !important;
}

.icon {
  height: 30px;
  width: 30px;
}

#items tr th img {
  width: 70px;
}

.container {
  padding: 0% !important;
}

.card {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: end;
  position: relative;
  border-radius: 56px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  -webkit-box-shadow: 9px 9px 28px #929292,
 -9px -9px 28px #ffffff;
          box-shadow: 9px 9px 28px #929292,
 -9px -9px 28px #ffffff;
}

.card img {
  border-radius: 56px;
  width: 350px;
}

.card .card-body {
  position: absolute;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  -ms-flex-item-align: end;
      align-self: end;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background-color: #00000053;
  border-radius: 0px 0px 56px 56px;
  -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
  color: #ffffff;
  width: 100%;
}

.card .card-body .btn-dark {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}

#contenedorProductos > div {
  padding-bottom: 30px;
}

.cardswrap {
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  float: left;
  width: 350px;
  margin-right: 15px;
  margin-bottom: 15px;
}
/*# sourceMappingURL=style.css.map */

.banner-contact{
    width: 100%;
    height: 100vh;
    background-image: url(https://i.pinimg.com/564x/04/23/5f/04235fdd40b38f219e1e65f463a88301.jpg);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }

.col-md-12n{
  text-align: center;
}
.col{
  text-align: center;
}
.h1-ru{
  color: rgba(0, 0, 0, 0);
}
</style>  
