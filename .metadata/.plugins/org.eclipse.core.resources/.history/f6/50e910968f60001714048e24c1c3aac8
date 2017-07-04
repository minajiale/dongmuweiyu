<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
  <%@  page import = "javax.swing.JOptionPane" %>
  <%@page import="com.minajiale.database.*" %>
<%@page import="java.sql.*" %>
<%@page import="object.*" %>
<%@   page   contentType="text/html;charset=UTF-8"   %>     
<%request.setCharacterEncoding("UTF-8");%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'productsAddChange.jsp' starting page</title>
    
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
  <h1>wode jsp yemian </h1>
   <%
   response.setContentType("text/html;charset=UTF-8");//设置传输编码
     int id=0;
      String label = session.getAttribute("label").toString();
   	 String  idString = request.getParameter("id");
      if(idString != null && idString != "" ){
         id = Integer.parseInt(idString);
      }
   	
   	 if(label != null && label.equals("add")){
   	    out.println("add");
   
   	    Product commodity = new Product();
	    Double buypriceD = 0.0;
	    Double sellpriceD = 0.0;
	    Double NumberD = 0.0;
	    Double MinNumberD = 0.0;
	    
	    String prductsnameT = (String)request.getParameter("produtsName");
	    
	    String prductsname = new String(prductsnameT.getBytes("ISO-8859-1"),"utf-8");
	    
	    String buypriceString = request.getParameter("buyprice");
	    if(buypriceString != null){
	       buypriceD =  Double.parseDouble(buypriceString);
	    }
	    String sellpriceString = request.getParameter("sellprice");
	    if(sellpriceString != null){
	    	sellpriceD =  Double.parseDouble(sellpriceString);
	    }
	    String numberString = request.getParameter("number");
	    if(numberString != null){
	    	NumberD =  Double.parseDouble(numberString);
	    }
	    String minnumberString = request.getParameter("minnumber");
	    if(minnumberString != null){
	       MinNumberD =  Double.parseDouble(minnumberString);
	    }
	    
	 	String clascificationT = request.getParameter("clascification"); 
	    String clascification = new String(clascificationT.getBytes("ISO-8859-1"),"utf-8");
	    
	    String codeT = request.getParameter("produtsCode"); 
	    String produtsCode = new String(codeT.getBytes("ISO-8859-1"),"utf-8");
	    
	     String specificationsT = request.getParameter("specifications"); 
	    String specifications = new String(specificationsT.getBytes("ISO-8859-1"),"utf-8");
	 		
	 	String ProductsPicture = request.getParameter("ProductsPicture");
	 	commodity.setName(prductsname);
	 	commodity.setBuyprice(buypriceD);
	 	commodity.setCalss(clascification);
	 	commodity.setMinnumber(MinNumberD);
	 	commodity.setPicture(ProductsPicture);
	 	commodity.setSellprice(sellpriceD);
	 	commodity.setNumber(NumberD);
	 	commodity.setCode(produtsCode);
	 	commodity.setSpecificationsT(specifications);
	 	
	 	out.println(prductsname);
	 	
	    ProductsDAO commodityDAO = ProductsDAOFactory.getcommodityDAOInstance();
	 	commodityDAO.addProducts(commodity);
	 	
	    response.sendRedirect("../IndexPart/products.jsp");
	 	
	 }
	 
	 	 if(label != null && label.equals("change")){
	 	 out.println("change");
	             Connection conn = DBConnection.getConnection();
		String updateSQL = "update products set name=?, class=?, buyprice=?, sellprice=?, picture=?,number=?,minnumber=? where id="+id+"";
		PreparedStatement pstmt = null;
		try{
		    //pstmt.setInt(1, id);
		    //pstmt.setString(1,idString);
			pstmt = conn.prepareStatement(updateSQL);
			//pstmt.executeUpdate();

		}catch(SQLException e){
			e.printStackTrace();
		}finally{
			DBConnection.close(pstmt);
			DBConnection.close(conn);
		}
	 
	 }
   %>
   
  </body>
</html>
