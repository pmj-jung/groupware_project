<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/include/HEAD.jsp" %>
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/regnlog.css">
<body>
  <%@ include file="/WEB-INF/views/include/HEADER.jsp" %>
  <div class="content_box">
    <div class="login_wrapper flex flex_col justify_c_center align_i_center w_100 h_100">
      <div class="login_content p_30">
        <h2 class="center m_b20">회원가입</h2>
        <form id="regFrm" method="POST">          
          <div class="lgnIpBox flex justify_c_between">
            <span class="must"></span>
            <input class="p_l15" type="text" name="userId" id="userId" placeholder="아이디" tabindex="1"/>
            <button type="button" class="chkBtn white_s_no m_l10 p_lr7" id="chkId">중복확인</button>
          </div>
          <p class="font_12 p_l5 gray m_t5 m_b10">아이디는 4~16자리의 영문, 숫자만 사용하실 수 있습니다.</p>
          
          <div class="lgnIpBox">
            <span class="must"></span>
            <input class="p_l15" type="password" name="userPwd" id="userPwd" placeholder="비밀번호" tabindex="2"/>
          </div>
          <p class="font_12 p_l5 gray m_t5 m_b10">영문, 숫자 포함 10자 이상 20자 이내로 입력해주세요.</p>

          <div class="lgnIpBox">
            <span class="must"></span>
            <input class="p_l15" type="password" id="reUserPwd" placeholder="비밀번호 재확인" tabindex="3"/>
          </div>
          <p class="font_12 p_l5 gray m_t5 m_b10">비밀번호를 다시 한번 입력해주세요.</p>

          <div class="lgnIpBox flex justify_c_between m_b10">
            <span class="must"></span>
            <input class="p_l15" type="text" name="userName" id="userName" placeholder="이름" tabindex="4"/>
            <select class="m_l10" name="userGender" tabindex="5" >
              <option value="m">남자</option>
              <option value="f">여자</option>
            </select>
          </div>

          <div class="lgnIpBox">
            <input class="p_l15" type="text" name="userPhone" id="userPhone" placeholder="전화번호" tabindex="6"/>
          </div>
          <p class="font_12 p_l5 gray m_t5 m_b10">'-'기호 없이 숫자만 입력해주세요.</p>
          
          <div class="lgnIpBox m_b30">
            <input class="p_l15" type="text" name="userEmail" id="userEmail" placeholder="이메일" tabindex="7"/>
          </div>
          
          <p>
            <button class="submit_btn" id="regBtn" type="button" tabindex="8">회원가입</button>
          </p>

        </form>

        <div class="link flex justify_c_between p_tb10">
          <a href="${pageContext.request.contextPath}/login" tabindex="9">로그인</a>
          <a href="${pageContext.request.contextPath}" tabindex="10">메인으로</a>
        </div>
      </div>
    </div>
  </div>
  <%@ include file="/WEB-INF/views/include/FOOTER.jsp" %>
</body>
<script>
	function checkId(){
		var userid = $("#userId").val();
		var idReg = /^(?=.*[a-z])(?=.*[0-9]).{4,16}$/;
		if(!idReg.test(userid)){
		  alert("아이디는 4~16자 영문자와 숫자 조합이어야 합니다.");
		  $("#userId").val("");
		  $("#userId").focus();
		  return false;
		}else{
	  		return true;
		}
	}
	
	function checkPwd(){
		var userPwd = $("#userPwd").val();
		var pwdReg = /^(?=.*[a-z])(?=.*[0-9]).{10,20}$/;
		if(!pwdReg.test(userPwd)){
		  alert("비밀번호는 10~20자의 영문자와 숫자 조합이어야 합니다.");
		  $("#userPwd").val("");
		  $("#userPwd").focus();
		  return false;
		}else{
			return true;
		}
	}
	
	function checkRePwd(){
		var userPwd = $("#userPwd").val();
		var reUserPwd = $("#reUserPwd").val();
		if( userPwd != reUserPwd ){
			alert("비밀번호가 일치하지 않습니다.");
			$("#reUserPwd").val("");
			$("#reUserPwd").focus();
			return false;
		}else{
			return true;
		}
	}
	
	function checkName(){
		var nameReg = /^[가-힣a-zA-Z]{2,10}$/;
		var userName = $("#userName").val();
		if(!nameReg.test(userName)){
			alert("이름은 2~10자의 영문자,한글만 사용가능합니다.");
			$("#userName").val("");
			$("#userName").focus();
			return false;
		}else{
			return true;
		}
	}
	
	function checkPhone(){
		var phoneReg = /^01[0179][0-9]{7,8}$/; //01로 시작하여 그 다음은  0,1,7,9 중 하나와 매칭되는지 체크한뒤 7~8자리인지 검사
		var userPhone = $("#userPhone").val();
		if(!phoneReg.test(userPhone)){
			alert("유효하지 않은 전화번호입니다.");
			$("#userPhone").val("");
			$("#userPhone").focus();
			return false;
		}else{
			return true;
		}
	}
	
	function checkEmail(){
		var emailReg = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
		// 이메일형식(aa11@aa.aa)
		var userEmail = $("#userEmail").val();
		if(!emailReg.test(userEmail)){
			alert("유효하지 않은 이메일주소입니다.");
			$("#userEmail").val("");
			$("#userEmail").focus();
			return false;
		}else{
			return true;
		}
	}
	
	$("#regBtn").click(function(){
		checkId();
		checkPwd();
		checkRePwd();
		checkName();
		checkPhone();
		checkEmail();
		
		if( checkId() && checkPwd() && checkRePwd() && checkName() && checkPhone() && checkEmail() ){
			$.ajax({
			  url   : "${pageContext.request.contextPath}/setRegister",
			  type  : "POST",
			  data  : $("#regFrm").serialize(),
			  success : function(resData){
				if(resData == "success"){
					alert("회원가입이 완료되었습니다.\n로그인 후 이용해주세요.");
					window.location.href ="${pageContext.request.contextPath}/login";
				}else{
					alert("이미 존재하는 아이디입니다.\n아이디를 변경해주세요.");
					$("#userId").val("");
					$("#userId").focus();
				}
			  },
			  error : function(){
			    alert("회원가입 에러 발생\n관리자에게 문의하세요.");
			    return false;
			  }
		 	});
		}
	});
	
	
	$("#chkId").click(function () {
      checkId();

      if (checkId() == true) {
        $.ajax({
          url: "${pageContext.request.contextPath}/checkSameId",
          type: "POST",
          data: { userId : $("#userId").val() },
          success: function (resData) {
            if (resData == "success") {
              alert("사용할 수 있는 아이디입니다.");
            } else {
              alert("이미 존재하는 아이디입니다.");
              $("#userId").val("");
              $("#userId").focus();
            }
          },
          error: function () {
            alert("아이디 중복체크 에러발생\n관리자에게 문의하세요");
          }
        });
      }
    });
</script>
</html>