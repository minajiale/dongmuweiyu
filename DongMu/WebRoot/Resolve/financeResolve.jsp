<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@page import="com.minajiale.database.*" %>
<%@page import="java.sql.*" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'financeResolve.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
           <%
           //处理删除按钮 即 当点击删除的时候将订单数据表的 订单状态改成完结，并将debts字段改成0.0
		       String  idString = request.getParameter("id");
		      String  name = (String)request.getParameter("name");
		      int id=0;
		        id = Integer.parseInt(idString);
		        if(name.equals("delete")){      
		Connection conn = DBConnection.getConnection();
				String deleteSQL="update productsorder set debt=0.0,progress=1";
				PreparedStatement pstmtD = null;
				try{
					pstmtD=conn.prepareStatement(deleteSQL);
					pstmtD.executeUpdate();
				}catch(SQLException e){
					e.printStackTrace();
				}finally{
					DBConnection.close(pstmtD);
					DBConnection.close(conn);
				}
		       response.sendRedirect("../index.jsp");
		      }
		      
           
            %>
  </body>
</html>
