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




$("#ANNIVERSARY1").click(function(){

    let items = $(".ANNIVERSARY1-items");
    items.siblings().fadeOut(10,function(){
        items.fadeIn(10);
    });
})

$("#ANNIVERSARY5").click(function(){

    let items = $(".ANNIVERSARY5-items");
    items.siblings().fadeOut(10,function(){

        items.fadeIn(10);
    });
})

$("#ANNIVERSARY25").click(function(){

    let items = $(".ANNIVERSARY25-items");
    items.siblings().fadeOut(10,function(){
        items.fadeIn(300);
    });
})

$("#ANNIVERSARY50").click(function(){

    let items = $(".ANNIVERSARY50-items");
    items.siblings().fadeOut(300,function(){

        items.fadeIn(300);
    });
})

