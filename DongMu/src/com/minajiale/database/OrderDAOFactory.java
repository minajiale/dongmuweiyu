package com.minajiale.database;

public class OrderDAOFactory {
	public static OrderDAO getOrderDAOInstance(){
		return new OrderDAOImpl();
	}

}
