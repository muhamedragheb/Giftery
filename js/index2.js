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
  console.log('ssss');
}
//end slicky navbar




$("#Birthday").click(function(){

    let items = $(".birthday-items");
    items.siblings().fadeOut(10,function(){
        items.fadeIn(10);
    });
})

$("#Wedding").click(function(){

    let items = $(".Wedding-items");
    items.siblings().fadeOut(10,function(){

        items.fadeIn(10);
    });
})

$("#Valentine").click(function(){

    let items = $(".Valentine-items");
    items.siblings().fadeOut(10,function(){
        items.fadeIn(300);
    });
})

$("#Anniversary").click(function(){

    let items = $(".Anniversary-items");
    items.siblings().fadeOut(300,function(){

        items.fadeIn(300);
    });
})

