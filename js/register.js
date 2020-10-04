$(function(){
    $("#submit").click(function(){
        var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
        var getCheck= RegExp(/^[a-zA-Z0-9]{4,12}$/);
        var getName= RegExp(/^[가-힣]+$/);

        //주민번호 관련(자릿수검사,주민번호->생년월일추출)
        var jumin_fmt = RegExp(/^\d{6}[1234]\d{6}$/);
        var buf= new Array(13);
        var jumin_birth = $("#jumin-num").val() + $("#jumin-num-back").val();

        //아이디 유효성검사
        if(!getCheck.test($("#user-id").val())){
            alert("형식에 맞게 입력해주세요");
            $("#user-id").val("");
            $("#user-id").focus();
            return false;
        }

        //아이디 비밀번호 같음 확인
        if($("#user-id").val() == $("#user-pwd").val()){
            alert("아이디와 비밀번호가 같습니다");
            $("#user-pwd").val("");
            $("#user-pwd").focus();
            return false;
        }

        //비밀번호 유효성검사
        if(!getCheck.test($("#user-pwd").val())){
            alert("형식에 맞게 입력해주세요");
            $("#user-pwd").val("");
            $("#user-pwd").focus();
            return false;
        }
        
        //비밀번호 서로확인
        if($("#user-pwd").val() != $("#pwd-check").val()){
            alert("비밀번호가 상이합니다");
            $("#user-pwd").val("");
            $("#pwd-check").val("");
            $("#user-pwd").focus();
            return false;
        }

        //이름 유효성 검사
        if(!getName.test($("#user-name").val())){
            alert("이름을 형식에 맞게 입력해주세요");
            $("#user-name").val("");
            $("#user-name").focus();
            return false;
        }

        //주민번호 유효성 검사
        if(($("#user-id-num").val() == "") || ($("#user-id-num-back").val() == "")){
            alert("주민등록번호를 입력해주세요");
            $("#user-id-num").focus(); 
            return false;
        }

        if( !jumin_fmt.test(jumin_birth) ){
            alert("주민등록번호 형식에 맞게 입력해주세요.");
            $("#jumin-num").focus();
            return false;
        }

        //주민번호 존재 검사(주민번호입력받은걸-정수로변환해서-배열로저장)
        for(var i = 0; i < buf.length; i++){
            buf[i]=parseInt(jumin_birth.charAt(i));
        }

        var multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
        var sum = 0;

        for(var i = 0; i < 12; i++){
           sum += buf[i] *= multipliers[i];
        }
        
        if( (11 - (sum%11)) % 10!= buf[12] ){
            alert("유효하지 않은 주민등록번호 입니다.");
            $("#jumin-num").focus();
            return false;
        }

        var brithYear = (jumin_birth.charAt(6) <= "2") ? "19" : "20";
        brithYear += $("#jumin-num").val().substr(0,2);
        var birthMonth = $("#jumin-num").val().substr(2,2);
        var birthDate = $("#jumin-num").val().substr(4,2);
        var birth = new Date(birthYear,birthMonth,birthDate);

        $("#birth-year").val(birthYear);
        $("#birth-month").val(birthMonth);
        $("#birth-date").val(birthDate);

        //이메일 공백 확인
        if($("#user-email").val() == ""){
            alert("이메일을 입력해주세요");
            $("#user-email").focus();
            return false;
        }

        //이메일 유효성 검사
        if(!getMail.test($("#user-email").val())){
            alert("이메일 형식에 맞게 입력해주세요.");
            $("#user-email").val("");
            $("#user-email").focus();
            return false;
        }
    });
});