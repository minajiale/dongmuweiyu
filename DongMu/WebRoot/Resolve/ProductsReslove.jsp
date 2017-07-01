<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@page import="com.minajiale.database.*" %>
<%@page import="java.sql.*" %>
  <%@  page import = "javax.swing.JOptionPane" %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'ProductsReslove.jsp' starting page</title>
      	 <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<link href="./css/bootstrap.min.css" rel="stylesheet">
	<style type="text/css">
	.form{
	display:block;
	   width:800px;
		 margin:0 auto
	}
	
	</style>
  </head>
  
  <body>
    <%
    int classification=0;
     Double buyprice=0.0;
     Double sellprice=0.0;
     int number=0 ;
    int minnumber=0;
    String productsName=null;
    int id =0;
    String  idString = request.getParameter("id");
      String  name = (String)request.getParameter("name");
      if(idString != null && idString != "" ){
         id = Integer.parseInt(idString);
      }
       if(name != null  && name.equals("delete")){
            out.println(name);
		   ProductsDAO commodityDAO = ProductsDAOFactory.getcommodityDAOInstance();
		    commodityDAO.deleteProducts(id);
		    response.sendRedirect("../index.jsp");
      }
      
      
      if(name != null  && name.equals("details")){
      if(idString != null){
         Connection conn = DBConnection.getConnection();
		String updateSQL = "select * from products where id="+id+"";
		PreparedStatement pstmt = null;
		try{
		    //pstmt.setInt(1, id);
		    //pstmt.setString(1,idString);
			pstmt = conn.prepareStatement(updateSQL);
			ResultSet rs = pstmt.executeQuery();
			while(rs.next()){
			  productsName=rs.getString(2);
			   classification = rs.getInt(3);
			  buyprice = rs.getDouble(4);
			  sellprice = rs.getDouble(5);
			   number = rs.getInt(8);
			  minnumber = rs.getInt(9);
			}
		}catch(SQLException e){
			e.printStackTrace();
		}finally{
			DBConnection.close(pstmt);
			DBConnection.close(conn);
		}
      }}
	
	 if(name != null  &&  name.equals("add")){
	 		String prductsname = (String)request.getParameter("produtsName");
	 	out.println(prductsname);
	 			    JOptionPane.showMessageDialog(null, "添加成功", "恭喜您", JOptionPane.ERROR_MESSAGE);
	 	
	 }
	
     %>
  </body>
  <div class="form">
	  <form action="Resolve/ProductsReslove.jsp?name=add" role="form"  class="form-horizontal">
	  <div class="form-group">
	  	<label  for="firstname" class="col-sm-2 control-label">产品名称</label>
	  	 <div class="col-sm-10">
	    	<input type="text" class="form-control" id="firstname" name="produtsName" value="<%= productsName %>"></input>
	    </div>
	   </div>
	   <div class="form-group" >
		    <label for="name"  class="col-sm-2 control-label"> 进价</label>
		     <div class="col-sm-10">
		    	<input type="text" class="form-control" id="name" name="buyprice" value="<%= buyprice %>"></input>
		    </div>
	    </div>
	   <div class="form-group" >
		    <label for="name"  class="col-sm-2 control-label">卖价</label>
		     <div class="col-sm-10">
		    	<input type="text" class="form-control" id="name" name="sellprice"value="<%= sellprice %>"></input>
		    </div>
	    </div>
	   <div class="form-group" >
		    <label for="name"  class="col-sm-2 control-label">剩余库存</label>
		     <div class="col-sm-10">
		    	<input type="text" class="form-control" id="name" name="number" value="<%= number %>"></input>
		    </div>
	    </div>
	   <div class="form-group" >
		    <label for="name"  class="col-sm-2 control-label">最小库存</label>
		     <div class="col-sm-10">
		    	<input type="text" class="form-control" id="name" name="minnumber" value="<%= minnumber %>"></input>
		    </div>
	    </div>
	     <div class="form-group">
   			 <label for="name" class="col-sm-2 control-label">分类</label>
    		<select class="form-control" id="name" class="col-sm-10" name="clascification"> 
      			<option>厨房用品</option>
      			<option>卫生间用品</option>
     			 <option>门</option>
      			<option>配件</option>
     			 <option>瓷砖</option>
   			 </select>
  		</div>
	     <div class="form-group" >
	     	<label class="sr-only" for="inputfile">文件输入</label>
		    <input type="file" id="inputfile">
		    <p class="help-block">请上传该产品图片</p>
	    </div>
	    	<button type="submit" class="btn btn-default form">提交</button>
	  </form>
 </div>
<script src="./js/jquery-3.2.1.min.js"></script>
<script src="./js/bootstrap.min.js"></script><!--boostrap 标准库-->
</html>
