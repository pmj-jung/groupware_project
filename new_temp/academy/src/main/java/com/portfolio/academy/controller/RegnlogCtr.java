package com.portfolio.academy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.portfolio.academy.model.UserVO;
import com.portfolio.academy.service.RegnlogSrv;

/*	작성일 : 2021-02-13
 * 	설명 : 회원가입 및 로그인 페이지 관련 컨트롤러 
 * */
@Controller
public class RegnlogCtr {
	
	@Autowired
	RegnlogSrv regnlogSrv;
	
	@RequestMapping("/login")
	public String getLogin() {
		return "login";
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public String getRegister() {
		return "register";
	}
	
	// 아이디 중복 체크
	@RequestMapping(value = "/checkSameId", method = RequestMethod.POST)
	@ResponseBody
	public String checkSameId(@RequestParam String userId) {
		int count = regnlogSrv.checkSameId(userId);
		String result;
		
		// count : 0=같은아이디없음, 1=같은아이디있음
		if( count > 0 ) {
			result = "failure";
		}else {
			result = "success";
		}
		return result;
	}
	
	// 회원가입 INSERT
	@RequestMapping(value = "/setRegister", method = RequestMethod.POST)
	@ResponseBody
	public String setRegister(@ModelAttribute UserVO uvo) {
		// System.out.println(uvo.getUserId() + uvo.getUserPwd() + uvo.getUserName() + uvo.getUserGender() + uvo.getUserPhone() + uvo.getUserEmail() );
		int count = regnlogSrv.checkSameId(uvo.getUserId()); // 아이디중복확인
		
		if(count > 0) {
			// 아이디가 중복
			return "failure";
		}else {
			// 아이디 유일 -> 회원가입 가능
			regnlogSrv.setRegister(uvo);
			return "success";
		}
	}
}
