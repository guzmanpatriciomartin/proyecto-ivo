<template>
  <div id="app">
    <TheNav/>
    <TheSection/>
    <TheStore/>
    <div id="feed">
    <TheCards v-for="(item, index) in products" :key="index"
		:image= item.thumbnail
		:title= item.title
    :price= item.price
    :id= item.id />
    </div>
  </div>
</template>

<script>
import TheNav from '../components/TheNav.vue'
import TheCards from '../components/TheCards.vue'
import TheSection from '../components/TheSection.vue'
import TheStore from '../components/TheStore.vue'
export default {
  name: 'IndexView',
  components: {
    TheNav,
    TheSection,
    TheCards,
    TheStore,

  },
  data() {
    let products=[]
    return {
      products
    }
  },
  methods:{
    rellenado: function(){
        fetch('https://api.mercadolibre.com/sites/MLA/search?seller_id=91495061').then(response => response.json())
.then(data =>{this.products=data.results})
			},
		},
		mounted(){
			this.rellenado()
		}
}
</script>