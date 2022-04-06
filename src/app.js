window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
}) 
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
