$(function(){
    $("#submit").click(function(){
        var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
        var getPwdCheck= RegExp(/^(?=.*[a-z])(?=.*[0-9])[0-9A-Za-z$&+,:;=?@#|'<>.^*()%!-]{8,16}$/);
        var getCheck= RegExp(/^[a-z][a-z\d]{4,12}$/);
        var getName= RegExp(/^[가-힣]+$/);

        //아이디 유효성검사
        if(!getCheck.test($("#userid").val())){
            alert("아이디는 영어 소문자와 숫자를 섞어 4~12자리로 입력해주세요.");
            $("#userid").val("");
            $("#userid").focus();
            return false;
        }

        //아이디 비밀번호 같음 확인
        if($("#userid").val() == $("#pwd").val()){
            alert("아이디와 비밀번호가 같습니다");
            $("#pwd").val("");
            $("#pwd").focus();
            return false;
        }

        //비밀번호 유효성검사
        if(!getPwdCheck.test($("#pwd").val())){
            alert("비밀번호는 8자 이상, 16자 이하여야 하며, 소문자와 숫자가 하나이상 포함되어야 합니다.");
            $("#pwd").val("");
            $("#pwd").focus();
            return false;
        }
        
        //비밀번호 서로확인
        if($("#pwd").val() != $("#pwd-check").val()){
            alert("비밀번호가 상이합니다");
            $("#pwd").val("");
            $("#pwd-check").val("");
            $("#pwd").focus();
            return false;
        }

        //이름 유효성 검사
        if(!getName.test($("#name").val())){
            alert("이름형식에 맞게 입력해주세요");
            $("#name").val("");
            $("#name").focus();
            return false;
        }

        // //주민등록번호 -> 생년월일 전달
        // var jumin = $("#jumin").val() + $("#jumin-back").val();
        // var fmt = RegExp(/^\d{6}[1234]\d{6}$/);
        // var buf = new Array(13);

        // if(!fmt.test(jumin)){
        //     alert("주민등록번호 형식에 맞게 입력해주세요.");
        //     $("#jumin").focus();
        //     $("#jumin").val("");
        //     return false;
        // }

        // //주민번호 존재 검사
        // for (var i = 0; i < buf.length; i++){
        //     buf[i] = parseInt(jumins.charAt(i));
        // }
        // var multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
        // var sum = 0;
        // for (var i = 0; i < 12; i++){
        //     sum += (buf[i] *= multipliers[i]);
        // }

        // if ((11 - (sum % 11)) % 10 != buf[12]) {
        //     alert("잘못된 주민등록번호 입니다.");
        //     $("#jumin").focus();
        //     return false;
        // }

        // var birthYear = (jumins.charAt(6) <= "2") ? "19" : "20";
        // birthYear += $("#jumin").val().substr(0, 2);
        // var birthMonth = $("#jumin").val().substr(2, 2);
        // var birthDate = $("#jumin").val().substr(4, 2);
        // var birth = new Date(birthYear, birthMonth, birthDate);
        // $("#birth-year").val(birthYear);
        // $("#birth-month").val(birthMonth);
        // $("#birth-date").val(birthDate);


        //이메일 공백 확인
        if($("#user-email").val() == ""){
            alert("이메일을 입력해주세요.");
            $("#user-email").focuse();
            return false;
        }

        //이메일 유효성 검사
        if(!getMail.test($("#user-email").val())){
            alert("이메일 형식에 맞게 입력해주세요");
            $("#user-email").val("");
            $("#user-email").focus();
            return false;
        }

        var date_pattern = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;
        
        if(!date_pattern.test($("#entDate").val())){
            alert("입사일 형식에 맞게 입력해주세요");
            $("#entDate").val("");
            $("#entDate").focus();
            return false;
        }
    });
});
