package com.example.interceptorTest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class LoggingInterceptor extends HandlerInterceptorAdapter {

	private static Logger logger = LoggerFactory.getLogger(LoggingInterceptor.class);
	// spring5는 별도 추가없이 Log4j 2.x, SLF4J
	// JUL(java.util.logging)을 자동으로 인식한다.
			
	@Override
	public boolean preHandle(
			HttpServletRequest request, 
			HttpServletResponse response, 
			Object handler)
			throws Exception {
		
		logger.info("[Controller Method 호출 전]");
		logger.info("[" + request.getMethod() + "]"); // get방식인지 post방식인지 가져옴
		logger.info("[" + request.getRequestURL() + "]"); // 주소창의 URL 가져옴(localhost:8080/interceptorTest/)
		logger.info("[" + request.getRequestURI() + "]");
		
		// !!preHandler()는 결과형이 boolean 이므로 true, false만 반환가능
		// 뒷단으로 요청 보내려면 true
		return true;
	}
	
}
