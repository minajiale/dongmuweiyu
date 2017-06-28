package com.minajiale.database;
import java.sql.*;

public class DBConnection {
	private static final String DBDRIVER = "com.mysql.jdbc.Driver";
	private static final String DBURL ="jdbc:mysql://localhost:3306/dongmu";
	private static final String DBUSER="root";
	private static final String DBPASSWORD="123456";
	public static Connection getConnection(){
		Connection conn =null;
		try{
			Class.forName(DBDRIVER);
			conn=DriverManager.getConnection(DBURL,DBUSER,DBPASSWORD);
		}catch(ClassNotFoundException e){
			e.printStackTrace();
		}catch(SQLException e){
			e.printStackTrace();
		}
		return conn;
	}
	
	public static void close(Connection conn){
		if(conn != null){
			try{
				conn.close();
			}catch(SQLException e){
				e.printStackTrace();
			}
		}
	}
	
	public static void close(PreparedStatement pstmt){
		if(pstmt != null){
			try{
				pstmt.close();
			}catch(SQLException e){
				e.printStackTrace();
			}
		}
	}
	
	public static void close(ResultSet rs){
		if(rs != null){
			try{
				rs.close();
			}catch(SQLException e){
				e.printStackTrace();
			}
		}
		
	}
}



























