package com.portfolio.academy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/*	작성일 : 2021-02-13
 * 	컨토롤러 설명 : 메인페이지 관련 컨트롤러
 * */
@Controller
public class MainCtr {

	// 메인페이지
	@RequestMapping("/")
	public String getMain() {
		return "main";
	}
}
