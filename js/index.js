$(".smallImg").click(function(){
    
let imgs =$(this).attr("src");
$("#bigImg").attr("src",imgs)
})


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({loop:true});
  });