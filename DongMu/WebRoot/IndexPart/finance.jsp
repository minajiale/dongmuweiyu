<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
 <%@page import="com.minajiale.database.*" %>
<%@page import="java.sql.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
		<div class="finance">

			 <h1 class="page-header">欠款买家详情</h1>
                    <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>买家姓名</th>
                  <th>买家电话</th>
                  <th>欠款金额</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>刘娜</td>
                  <td>1317798633</td>
                  <td>￥675432</td>
				   <td><a href="#">删除</a></td>
                </tr>
                <%
          		Connection conn = DBConnection.getConnection();
				String updateSQL = "select * from productsorder where progress = 3";
				PreparedStatement pstmt = null;
				try{
					pstmt = conn.prepareStatement(updateSQL);
					ResultSet rs = pstmt.executeQuery();
					while(rs.next()){
						int costomerid = rs.getInt(3);
						Double debt = rs.getDouble(6);
						String Customer=null;
						String phone = null;
						
						//根据顾客ID查找顾客姓名
						String customerSQL = "select * from customer where id= "+costomerid+"";
					    PreparedStatement pstmtC = null;
					    pstmtC = conn.prepareStatement(customerSQL);
					    ResultSet rsC = pstmtC.executeQuery();
					    while(rsC.next()){
					    	Customer= rsC.getString(2);
					    	phone = rsC.getString(3);
					    }
					    
					    
					    int id= rs.getInt(1);
						out.println("<tr><td>"+Customer+"</td><td>"+phone+"</td><td>￥"+debt+
						"<td><a href='./Resolve/financeResolve.jsp?name=delete&id=" + id + "'>删除</a></td></tr>");
					}
				}catch(SQLException e){
					e.printStackTrace();
				}finally{
					DBConnection.close(pstmt);
					DBConnection.close(conn);
				}
           %> 

              </tbody>
            </table>
		</div>  
		</div>
</body>
</html>