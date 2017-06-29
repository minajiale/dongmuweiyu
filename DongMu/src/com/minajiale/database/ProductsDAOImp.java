package com.minajiale.database;

import java.util.ArrayList;
import java.util.List;

import object.Product;
import java.sql.*;

public class ProductsDAOImp implements ProductsDAO {

	public void addProducts(Product commodity) {
		// TODO Auto-generated method stub
		Connection conn = DBConnection.getConnection();
		String addSQL ="insert into ";
		PreparedStatement pstmt = null;
		try{
			pstmt = conn.prepareStatement(addSQL);
			pstmt.setString(1,commodity.getName());
			pstmt.executeUpdate();
		}catch(SQLException e){
			e.printStackTrace();
		}finally{
			DBConnection.close(pstmt);
			DBConnection.close(conn);
		}

	}

	public void updateProducts(Product commodity) {
		// TODO Auto-generated method stub

	}

	public void deleteProducts(int commodityId) {
		// TODO Auto-generated method stub

	}

	public List<Product> findAllCommodity() {
		// TODO Auto-generated method stub
		Connection conn = DBConnection.getConnection();
		String updateSQL = "select * from products ";
		PreparedStatement pstmt = null;
		List<Product> commosityList = new ArrayList<Product>();
		try{
			pstmt = conn.prepareStatement(updateSQL);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()){
				Product commodity = new Product();
				commodity.setBuyprice(rs.getString(1));
			}
		}catch(SQLException e){
			e.printStackTrace();
		}finally{
			DBConnection.close(pstmt);
			DBConnection.close(conn);
		}

		return commosityList;
	}

	public Product findCommdityById(int commodityId) {
		// TODO Auto-generated method stub
		return null;
	}

}









































