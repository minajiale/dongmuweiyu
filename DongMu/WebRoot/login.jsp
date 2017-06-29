<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@page import="com.minajiale.database.*" %>
<%@page import="java.sql.*" %>
  <%@  page import = "javax.swing.JOptionPane" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="./favicon.ico">

    <title>登陆界面</title>

    <!-- Bootstrap core CSS -->
    <link href="./css/bootstrap.min.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="./assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="./css/signin.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="./assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="./assets/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <div class="container">

      <form class="form-signin" method="post" action="./login.jsp">
        <h2 class="form-signin-heading">请登录</h2>
        <label for="name" class="sr-only">请输入您的名字</label>
        <input type="name" id="inputEmail" class="form-control" name="workerName" placeholder="请输入您的名字" method="post" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" method="post"  name="password" placeholder="密码" required>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> 记住密码
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">登陆</button>
      </form>

    </div> <!-- /container -->


    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>
 	<%
		request.setCharacterEncoding("utf-8");
		String username = request.getParameter("workerName");
		String pwd = request.getParameter("password");
		
		 if((username!=null)&&(username!=""))
		{
			
		
			Connection conn = DBConnection.getConnection();
				
		   PreparedStatement pstmt = null;
			String SQLString="SELECT * FROM people where name='"+username+"' ";//查询该用户是否曾经登陆过
		    pstmt = conn.prepareStatement(SQLString);
			ResultSet rs1 = pstmt.executeQuery();
			//String test = session.getAttribute("username").toString();

			if(rs1.next()){
				if(pwd.equals(rs1.getString(4))){
				    session.setAttribute("username",username);
   				    session.setAttribute("power",rs1.getString(3));
					response.sendRedirect("index.jsp");
				}

				else
					 JOptionPane.showMessageDialog(null, "密码错误", "出错啦", JOptionPane.ERROR_MESSAGE);
			}

			DBConnection.close(conn);
			DBConnection.close(pstmt);
		}
		
	%>
  </body>
</html>

