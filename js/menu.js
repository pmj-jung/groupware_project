$(function(){
    $(".menu").click(function(){
        if($(this).find(".submenu").is(":visible")){
            $(this).find(".submenu").slideUp(200);
            $(this).toggleClass('changed');
        }
        else{
            $(this).find(".submenu").slideDown(200);
            $(this).toggleClass('changed');
        }
    });

    
});