<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
        <%@page import="com.minajiale.database.*" %>
<%@page import="java.sql.*" %>
  <%@  page import = "javax.swing.JOptionPane" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
  	 <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	

	<title>东牧卫浴管理系统</title>
	
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	  <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="./assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">
       <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="./assets/js/ie-emulation-modes-warning.js"></script>
    
	    <link rel="icon" href="./favicon.ico">
	<link href="../css/bootstrap.min.css" rel="stylesheet">
	<link href="../css/dashborad.css" rel="stylesheet">
  </head>
<body>
<h1 class="page-header">待办事项</h1>
                    <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>事项</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
              <!-- 
                <tr>
                  <td><span>花洒</span>库存不足，只剩下<span>3</span>个。</td>
                  <td><a href="#">详情</a></td>

                </tr>
                 -->
                <%
        Connection connProducts = DBConnection.getConnection();
		String updateProductsSQL = "select * from products where number < minnumber";
		PreparedStatement pstmtproducts = null;
		try{
			pstmtproducts = connProducts.prepareStatement(updateProductsSQL);
			ResultSet rsproducts = pstmtproducts.executeQuery();
			while(rsproducts.next()){
			    int id= rsproducts.getInt(1);
				out.println("<tr><td><span>"+ rsproducts.getString(2)+"</span>库存不足，只剩下<span>"+rsproducts.getDouble(8)+"</span>个。</td>"+
				"<td><a href='../Resolve/ProductsReslove.jsp?name=details&id=" + id + "'>详情</a></td>");
			}
		}catch(SQLException e){
			e.printStackTrace();
		}finally{
			DBConnection.close(pstmtproducts);
			DBConnection.close(connProducts);
		}
           %> 
              </tbody>
            </table>
          </div>  
</body>
        <script src="./js/echarts.js"></script> <!--echart图表-->
	     <script src="./js/index.js"></script> <!--idnexjs文件-->
         <script src="./js/jquery-3.2.1.min.js"></script> <!--idnexjs文件-->
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="./js/jquery-3.2.1.min.js"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="../js/bootstrap.min.js"></script><!--boostrap 标准库-->
    <!-- Just to make our placeholder images work. Don't actually copy the next line! -->
    <script src="../../assets/js/vendor/holder.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>
</html>