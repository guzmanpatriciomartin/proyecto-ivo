
<template>
  <div id="app">
    <TheNav/>
    <TheSectionN/>
    <TheCards/>
    <TheSectionN2/>
    <TheCards2/>
    <TheSectionN3/>
    <div id="feed">
    <TheCardsN v-for="(item, index) in products" :key="index"
		:image= item.thumbnail
		:title= item.title
    :price= item.price
    :id= item.id />
    </div>
  </div>
</template>
<script>
// import { mapState, mapMutations } from 'vuex'
import TheNav from './components/TheNav.vue'
import TheSectionN from './components/TheSectionN.vue'
import TheCardsN from './components/TheCardsN.vue'
import TheSectionN2 from './components/TheSectionN2.vue'
import TheCards2 from './components/TheCards2.vue'
import TheSectionN3 from './components/TheSectionN3.vue'
export default {
  name: 'App',
  components: {
    TheNav,
    TheSectionN,
    TheCardsN,
    TheSectionN2,
    TheCards2,
    TheSectionN3,

//   },
//   data() {
//     let products=[]
//     return {
//       products
//     }
//   },
//   methods:{
//     rellenado: function(){
//         fetch('https://api.mercadolibre.com/sites/MLA/search?seller_id=91495061').then(response => response.json())
// .then(data =>{this.products=data.results})
// 			},
// 		},
// 		mounted(){
// 			this.rellenado()
// 		}
// }
  }
}
</script>
<style>
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

.banner {
  width: 100%;
  height: 100vh;
  background-image: url(./img/depositphotos_395608384-stock-photo-abstract-wallpaper-background-grunge-gray.webp);
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