<%@ page language="java" contentType="text/html; charset=UTF-8"
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
	
	
  <style type="text/css">
    .top-nav
    {
      font-size: 12px;
      font-weight: bold;
      list-style: none;
    }
    .top-nav li
    {
      float: left;
      list-style: none;
      margin-right: 1px;
    }
    .top-nav li a
    {
      line-height: 20px;
      text-decoration: none;
      background: #DDDDDD;
      color: #666666;
      display: block;
      width: 80px;
      text-align: center;
    }
    .top-nav li a:hover
    {
      background: #900;
      color: #FFF;
    }
    .top-nav ul
    {
      list-style: none;
      display: none;
      width: 80px;
      padding: 0;
      position: relative;
    }
    .top-nav li ul li ul
    {
      position: absolute;
      top: 0;
      left: 80px;
    }
  </style>
</head>
<body>
		<div class="finance">
			
		<h1 class="page-header">订单管理</h1>
		
		<!-- 分类菜单 -->
		<div class="classify">
		<ul class="venus-menu top-nav">  
       		 <li>  
            	<a href="#"><i class="icon-thumbs-up"></i>分类</a>  
            	<ul>  
                <li><a href="#">门</a></li>  
                <li><a href="#">水桶头</a></li>  
                <li>  
                    <a href="#">卫生间用品</a>  
                    <ul>  
                        <li><a href="#">花洒</a></li>  
                        <li><a href="#">蹲便器</a></li>  
                        <li>  
                            <a href="#">Photoshop</a>  
                            <ul>  
                                <li><a href="#">Photo editing</a></li>  
                                <li><a href="#">Business cards</a></li>  
                                <li><a href="#">Websites</a></li>  
                                <li><a href="#">Flyers</a></li>  
                            </ul>  
                        </li>  
                        <li><a href="#">Fonts</a></li>  
                    </ul>  
                </li>  
                <li><a href="#">Consulting</a></li>  
            </ul>  
        </li>  
        <li class="search">  
            <form method="get">  
                <input type="text" name="search" class="search" placeholder="搜索" />  
            </form>  
        </li>  
    </ul>  
		</div>
		
		<!-- 中间产品表格 -->
         <div class="table-responsive">
            <table class="table table-striped">
               <thead>
                <tr>
                  <th>客户名称</th>
                  <th>订单日期</th>
                  <th>订单金额</th>
                  <th>订单状态</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
              <!-- 
                <tr>
                  <td>张三</td>
                  <td>2016-12-4</td>
				  <td>￥20000</td>
				  <td>完结</td>
				   <td><a href="#">详情</a></td>
				   <td><a href="#">删除</a></td>
                </tr> -->
         <%
         Connection connOrder = DBConnection.getConnection();
		String updateOrderSQL = "select * from productsorder";
		PreparedStatement pstmtOrder = null;

		try{
			pstmtOrder = connOrder.prepareStatement(updateOrderSQL);
			ResultSet rs = pstmtOrder.executeQuery();
			while(rs.next()){
				 int id= rs.getInt(1);
				 int costomerid = rs.getInt(3);
				 int progressId = rs.getInt(7);
				 String Customer = null;
				 String progress = null;
				 
				 //根据顾客ID查找顾客姓名
				String customerSQL = "select * from customer where id= "+costomerid+"";
			    PreparedStatement pstmtC = null;
			    pstmtC = connOrder.prepareStatement(customerSQL);
			    ResultSet rsC = pstmtC.executeQuery();
			    while(rsC.next()){
			    	Customer= rsC.getString(2);
			    }
			  
			    //根据订单状态ID查找订单状态
				String processSQL = "select * from progess where id= "+progressId+"";
			    PreparedStatement pstmtP = null;
			    pstmtP = connOrder.prepareStatement(processSQL);
			    ResultSet rsP = pstmtP.executeQuery();
			    while(rsP.next()){
			    	progress= rsP.getString(3);
			    }
			    
			    
				out.println("<tr><td>"+Customer+"</td><td>"+rs.getString(2)+"</td><td>￥"+ rs.getString(4)+ "</td><td>"+progress+
				"<td><a href='../Resolve/OrderReslove.jsp?name=details&id=" + id + "'>详情</a></td>"+
				"<td><a href='../Resolve/OrderReslove.jsp?name=delete&id=" + id + "'>删除</a></td></tr>");
			}
		}catch(SQLException e){
			e.printStackTrace();
		}finally{
			DBConnection.close(pstmtOrder);
			DBConnection.close(connOrder);
		}
         %> 
              </tbody>
            </table>
          </div> 
		</div>
			   
</body>
<script type="text/javascript" src="./js/jquery-3.2.1.min.js"></script>
<script type="text/javascript">
   $(function(){
    $(".top-nav li").hover(function(){
      $(this).has("ul").children("ul").fadeIn();
    },function(){
      $(this).has("ul").children("ul").hide();
    });
   }) 
</script>


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