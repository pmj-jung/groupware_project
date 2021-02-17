package com.portfolio.academy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portfolio.academy.model.UserVO;
import com.portfolio.academy.repository.RegnlogDao;

@Service
public class RegnlogSrvImpl implements RegnlogSrv {
	
	@Autowired
	RegnlogDao regnlogDao;
	
	@Override
	public int checkSameId(String userId) {
		return regnlogDao.checkSameId(userId);
	}

	@Override
	public void setRegister(UserVO uvo) {
		regnlogDao.setRegister(uvo);
	}
}
