$(function checks(){
    var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
    var getCheck= RegExp(/^[a-zA-Z0-9]{4,12}$/);
    var getName= RegExp(/^[가-힣]+$/);
    var fmt = RegExp(/^\d{6}[1234]\d{6}$/);

    //아이디 유효성검사
    // if(!getCheck.test($("#user-id").val())){
    //     alert("형식에 맞게 입력해주세요");
    //     $("#user-id").val("");
    //     $("#user-id").focus();
    //     return false;
    // }

    // //아이디 비밀번호 같음 확인
    // if($("#user-id").val() == $("#user-pwd").val()){
    //     alert("아이디와 비밀번호가 같습니다");
    //     $("#user-pwd").val("");
    //     $("#user-pwd").focus();
    //     return false;
    // }

    // //비밀번호 공백 확인
    // if($("#user-pwd").val() == ""){
    //     alert("패스워드 입력바람");
    //     $("#user-pwd").focus();
    //     return false;
    // }

    // //비밀번호 유효성검사
    // if(!getCheck.test($("#user-pwd").val())){
    //     alert("형식에 맞게 입력해주세요");
    //     $("#user-pwd").val("");
    //     $("#user-pwd").focus();
    //     return false;
    // }

    // //비밀번호 확인란 공백 확인
    // if($("#pwd-check").val() == ""){
    //     alert("패스워드 확인란을 입력해주세요"); 
    //     $("#pwd-check").focus();
    //     return false;
    // }
    
    // //비밀번호 서로확인
    // if($("#user-pw").val() != $("#pwd-check").val()){
    //     alert("비밀번호가 상이합니다");
    //     $("#user-pw").val("");
    //     $("#pwd-check").val("");
    //     $("#user-pw").focus();
    //     return false;
    // }

    // //이름 공백 검사
    // if($("#user-name").val() == ""){
    //     alert("이름을 입력해주세요");
    //     $("#user-name").focus();
    //     return false;
    // }

    // //이름 유효성 검사
    // if(!getCheck.test($("#user-name").val())){
    //     alert("이름형식에 맞게 입력해주세요");
    //     $("#user-name").val("");
    //     $("#user-name").focus();
    //     return false;
    // }

    //주민번호 유효성 검사
    if(($("#user-id-num").val() == "") || ($("#user-id-num_back").val() == "")){
        alert("주민등록번호를 입력해주세요");
        $("#user-id-num").focus(); 
        return false;
    }
    
    if(check_jumin() ==false){
        return false;
    }
});

$(function(){

});