
/*  //without smoothing

$(".smallImg").click(function(){
    
let imgs =$(this).attr("src");
$("#bigImg").attr("src",imgs)
})


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({loop:true});
  });

  */

let allBiggerImage=document.getElementsByClassName("bigger");
let allBiggerImage_array=[];
for(let i=0;i<allBiggerImage.length;i++)
{
  allBiggerImage_array[i]=allBiggerImage[i]; 
}
let allSmallImage=document.getElementsByClassName("smallImg");
let allSmallImage_array=[];
for(let i=0;i<allSmallImage.length;i++)
{
  allSmallImage_array[i]=allSmallImage[i]; 
}
let currentImg=0;

let prev_btn=document.getElementById("prev-img");
let next_btn=document.getElementById("next-img");

prev_btn.addEventListener("click",function(e){

  let temp=currentImg-1;
  if(temp < 0)
  {
    temp=allBiggerImage_array.length-1;
  }
  $(allBiggerImage_array[currentImg]).fadeOut(1000);
  $(allBiggerImage_array[temp]).fadeIn(1000);
  currentImg=temp;  
})

next_btn.addEventListener("click",function(e){

  let temp=currentImg+1;
  if(temp > allBiggerImage_array.length-1)
  {
    temp=0;
  }
  $(allBiggerImage_array[currentImg]).fadeOut(1000);
  $(allBiggerImage_array[temp]).fadeIn(1000);
  currentImg=temp;  
})


$(".smallImg").click(function(e){

  let index=allSmallImage_array.indexOf(e.target);

  if(currentImg != index )
  {
     $(allBiggerImage_array[currentImg]).fadeOut(1000);
     $(allBiggerImage_array[index]).fadeIn(1000);
     currentImg=index;
   }

})
  
  
/* for Reviews Section */


  $(document).ready(function(){
      $('.owl-carousel').owlCarousel({
        loop:true,
        items:4,
        margin:10,
        responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          768:{
            items:2,
            nav:false
          },
          1050:{
              items:3,
              nav:false
          },
          1350:{
              items:4,
              nav:true,
          }
          
      }
      
      });
    });


 


    /* Related products */

    $('.slick-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      touchMove: false,
      autoplaySpeed: 2000,
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        } 
      ]
    });
    