package com.portfolio.academy.service;

import com.portfolio.academy.model.UserVO;

public interface RegnlogSrv {
	public void setRegister(UserVO uvo);
	public int checkSameId(String userId);
}
