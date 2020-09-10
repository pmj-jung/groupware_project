$(function(){
    $(".header-wrap").click(function(){
        $(".chat-history").slideToggle(300);
        $(".frm").slideToggle(300);
        $(".chat-msg-counter").toggle(100);
    });

    $(".chat-close").click(function(e){
        //a태그쓸때만 function()에 e 넣기 & e.preventDefault();
        alert("라이브 채팅창을 닫습니다.");
        $(".live-chat").fadeOut(100);
        e.preventDefault(); // a태그 : 다음 페이지로 이동한다 . 이 속성을 막아주는게 e.preventDefault()
    });
});