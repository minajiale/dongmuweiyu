 <%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
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
	<!--<link href="../css/dashborad.css" rel="stylesheet"> -->
  </head>
<body>
       
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
           <!--   <li ><a href="#">Overview <span class="sr-only">(current)</span></a></li>-->
            <li onclick="setTab(1,6)" id="1" ><a href="alarm.jsp" target="content">提醒服务</a></li>
            <li class="active" id="2" onclick="setTab(2,6)"><a href="nanlyse.jsp" target="content">统计</a></li>
        
          </ul>
          <ul class="nav nav-sidebar">
            <li id="3" onclick="setTab(3,6)" ><a href="finance.jsp" target="content">财务管理</a></li>
            <li id="4" onclick="setTab(4,6)"><a href="products.jsp" target="content">产品管理</a></li>
            <li id="5" onclick="setTab(5,6)"><a href="order.jsp" target="content">订单管理</a></li>
            <li id="6" onclick="setTab(6,6)"><a href="peoplemanage.jsp" target="content">店员管理</a></li>
          </ul>
        </div>
        
        </body>
         <script src="../js/echarts.js"></script> <!--echart图表-->
	     <script src="./js/index.js"></script> <!--idnexjs文件-->
        <script src="../js/jquery-3.2.1.min.js"></script>
        <script src="../js/bootstrap.min.js"></script><!--boostrap 标准库-->
</html>