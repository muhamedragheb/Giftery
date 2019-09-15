//start navbar

$("#btn-toggle-0").click(function(){
    $(".sidenav").animate({left:"0px"},500);
  })
  
  $("#close").click(function(){
  $(".sidenav").animate({left:"-250px"},500);    
  })
  
  //end navbar




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

