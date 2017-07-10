<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
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
    
    <title>My JSP 'Ordertemplate.jsp' starting page</title>
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
	.formmid{
	display:block;
	   width:800px;
		 margin:0 auto
	}
	
	</style>
  </head>
  
  <body>
  </body>
  
      <%
               request.setCharacterEncoding("UTF-8");//传值编码
               
        Connection connProducts = DBConnection.getConnection();
		String updateProductsSQL = "SELECT * FROM classification GROUP BY classTop;";
		PreparedStatement pstmtproducts = null;
		try{
			pstmtproducts = connProducts.prepareStatement(updateProductsSQL);
			ResultSet rsproducts = pstmtproducts.executeQuery();
			while(rsproducts.next()){
			    String classTop = rsproducts.getString(2);
			    
			    
			    out.println("<div class=\"panel panel-default\"><div class=\"panel-heading\"><h4 class=\"panel-title\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">" +
                            classTop + "</a></h4></div>");
                String selectClassTwoSQL = "SELECT * FROM classification WHERE classTop = ?;";
				PreparedStatement pstmtClassTwo = null;  
				try{
					pstmtClassTwo = connProducts.prepareStatement(selectClassTwoSQL);
					pstmtClassTwo.setString(1, classTop);
					ResultSet rsClassTwo = pstmtClassTwo.executeQuery();
				  while(rsClassTwo.next()){
    				String classTwo = rsClassTwo.getString(3);
    				out.println("");
    				}
	
				}catch(SQLException e){
						e.printStackTrace();
					}finally{
						DBConnection.close(pstmtClassTwo);
					}        
                
			}
		}catch(SQLException e){
			e.printStackTrace();
		}finally{
			DBConnection.close(pstmtproducts);
			DBConnection.close(connProducts);
		}
           %> 
           
  
  	<div class="panel panel-default">
		<div class="panel-heading">
			<h4 class="panel-title">
				<a data-toggle="collapse" data-parent="#accordion" 
				   href="#collapseOne">
					点击我进行展开，再次点击我进行折叠。第 1 部分
				</a>
			</h4>
		</div>
		
		<div id="collapseOne" class="panel-collapse collapse in">
			<div class="panel-body">
					
			</div>
		</div>
	</div>
  
  <div class="formmid">
	  <form action="" role="form"  class="form-horizontal">
	  <div class="form-group">
	  	<label  for="firstname" class="col-sm-3 control-label">订单号</label>
	  	 <div class="col-sm-10">
	    	<input type="text" class="form-control" id="firstname" name="orderId"placeholder=""></input><span>该ID自动生成无须改动</span>
	    </div>
	   </div>
	   
	   
	   <div class="form-group" >
		    <label for="name"  class="col-sm-3 control-label">订单时间</label>
		     <div class="col-sm-10">
			<div class="control-group">
                <div class="controls input-append date form_date" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
                    <input size="16" type="text" value="" readonly name="orderTime">
                    <span class="add-on"><i class="icon-remove"></i></span>
					<span class="add-on"><i class="icon-th"></i></span>
                </div>
				<input type="hidden" id="dtp_input2" value="" /><br/>
            </div>		    </div>
	    </div>
	    
	    
	    
	   <div class="form-group" >
		    <label for="name"  class="col-sm-3 control-label">顾客姓名</label>
		     <div class="col-sm-10">
		    	<input type="text" class="form-control" id="name" time="customer" name="customerName"placeholder=""></input>
		    </div>
	    </div>
	    <div class="form-group" >
		    <label for="name"  class="col-sm-3 control-label">卖家姓名</label>
		     <div class="col-sm-10">
		    	<input type="text" class="form-control" id="name" time="dealer" name="dealer"placeholder=""></input>
		    </div>
	    </div>
	   <div class="form-group" >
		    <label for="name"  class="col-sm-2 control-label">订单总金额</label>
		     <div class="col-sm-10">
		    	<input type="text" class="form-control" id="name" name="totalamount" placeholder=""></input>
		    </div>
	    </div>
	    <div class="form-group" >
		    <label for="name"  class="col-sm-2 control-label">欠款金额</label>
		     <div class="col-sm-10">
		    	<input type="text" class="form-control" id="name" name="debt" placeholder=""></input>
		    </div>
	    </div>
	    <div class="form-group">
   			 <label for="name" class="col-sm-2 control-label">付款方式</label>
    		<select class="form-control" id="name" class="col-sm-10" name="payway"> 
      			<option></option>
      			<option>现金</option>
     			 <option>微信</option>
      			<option>支付宝</option>
     			 <option>银行转账</option>
   			 </select>
  		</div>
  		<div class="form-group">
   			 <label for="name" class="col-sm-2 control-label">订单状态</label>
    		<select class="form-control" id="name" class="col-sm-10" name="progress"> 
      			<option></option>
      			<option>预付定金</option>
     			 <option>欠款未完成</option>
      			<option>完结</option>
   			 </select>
  		</div>

	    <div class="form-group" >
		    <label for="name"  class="col-sm-2 control-label">购买产品列表</label>
		     <div class="col-sm-10">
		    	<input type="text" class="form-control" id="name" name="productsList" placeholder=""></input>
		    </div>
	    </div>
	    	<button type="submit " class="btn btn-default formmid" >提交</button>
	  </form>
 </div>
<script type="text/javascript" src="./js/jquery-3.2.1.min.js" charset="UTF-8"></script>
<script src="./js/bootstrap.min.js"></script><!--boostrap 标准库-->

</html>
