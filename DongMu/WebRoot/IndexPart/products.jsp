<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
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
			
		<h1 class="page-header">产品管理</h1>
		
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
                  <th>产品名称</th>
                  <th>销售单价（元）</th>
                  <th>剩余库存</th>
                  <th>成交数量</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>东牧单孔水龙头</td>
                  <td>￥230</td>
				  <td>340</td>
				  <td>90</td>
				   <td><a href="#">详情</a></td>
				   <td><a href="#">删除</a></td>
                </tr>
                <tr>
                  <td>好太太油烟机</td>
                  <td>￥400</td>
				  <td>30</td>
				  <td>300</td>
				   <td><a href="#">详情</a></td>
				   <td><a href="#">删除</a></td>
                </tr>
                <tr>
                  <td>红铜大门</td>
                  <td>￥4900</td>
				  <td>10</td>
				  <td>5</td>
				   <td><a href="#">详情</a></td>
				   <td><a href="#">删除</a></td>
                </tr>
              </tbody>
            </table>
          </div>  
		</div>
		
		request.setCharacterEncoding("utf-8");
		Connection conn = DBConnection.getConnection();
		
		   PreparedStatement pstmt = null;
			String SQLString="SELECT * FROM people where name='"+username+"' ";//查询该用户是否曾经登陆过
		    pstmt = conn.prepareStatement(SQLString);
			ResultSet rs1 = pstmt.executeQuery();
			   
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
</html>