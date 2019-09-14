$(".smallImg").click(function(){
    
let imgs =$(this).attr("src");
$("#bigImg").attr("src",imgs)
})


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({loop:true});
  });


  //start slicky navbar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav-slicky");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed-top")
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("fixed-top")
    navbar.classList.remove("sticky");
  }
  console.log(window.pageYOffset);
}
//end slicky navbar