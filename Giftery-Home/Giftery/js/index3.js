




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

