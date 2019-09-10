$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    if(scrollTop>$("#searchBox").offset().top+50)
        {
            $(".navbar").css("display","none");
            $("#menue").css({position:'fixed',backgroundColor:'#fff','z-index':'9999999999999'});
        }
    else
        {
            $(".navbar").css("display","block");
            $("#menue").css({position:'static'});
        }
})