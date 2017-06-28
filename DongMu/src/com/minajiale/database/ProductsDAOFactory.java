package com.minajiale.database;
import com.minajiale.database.*;
public class ProductsDAOFactory {
	public static ProductsDAO getcommodityDAOInstance(){
		return new ProductsDAOImp();
	}
}
