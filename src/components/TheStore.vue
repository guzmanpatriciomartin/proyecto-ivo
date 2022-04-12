<template>
  <div id="tienda">
    <hr />
    <h1 class="text-center">TIENDA</h1>
  </div>
</template>
<script>
// Importamos JQuery
const $ = require('jquery')
// Lo declaramos globalmente
window.$ = $
export default {
  name: 'TheStore',
}
$(document).ready(function(){
    var altura= $('#tienda').offset().top;
    $(window).on('scroll',function(){
        if($(window).scrollTop()> altura){
            $('#tienda').addClass('tienda-fixed');
        } else {
            $('#tienda').removeClass('tienda-fixed');
        }
    })
})
</script>
<style>
#tienda h1{
    display: flex;
    height: 70px;
    justify-content: center;
    align-items: center;
}
</style>