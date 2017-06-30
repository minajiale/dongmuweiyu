<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%--<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />--%>
<head id="Head1" runat="server">
    <title></title>
    <link href="css/maincss.css" rel="stylesheet" type="text/css" />
    <script src="js/jquery.js" type="text/javascript"></script>
    <style type="text/css">
        html
        {
            height: 100%;
        }
        body
        {
            height: 100%;
            background: #576a85;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div class="menu" id="menu">
        <h2>
            商家管理</h2>
        <ul>
            <li><a href="Add.aspx" target="list">添加商家</a></li>
            <li><a href="List.aspx" target="list">商家信息管理</a></li>
        </ul>
         <h2>
            商家管理</h2>
        <ul>
            <li><a href="Add.aspx" target="list">添加商家</a></li>
            <li><a href="List.aspx" target="list">商家信息管理</a></li>
        </ul>
         <h2>
            商家管理</h2>
        <ul>
            <li><a href="Add.aspx" target="list">添加商家</a></li>
            <li><a href="List.aspx" target="list">商家信息管理</a></li>
        </ul>
         <h2>
            商家管理</h2>
        <ul>
            <li><a href="Add.aspx" target="list">添加商家</a></li>
            <li><a href="List.aspx" target="list">商家信息管理</a></li>
        </ul>
         <h2>
            商家管理</h2>
        <ul>
            <li><a href="Add.aspx" target="list">添加商家</a></li>
            <li><a href="List.aspx" target="list">商家信息管理</a></li>
        </ul>
    </div>
    <script type="text/javascript">
        $(".menu h2").click(function () {
            $(this).next("ul").slideToggle(300).siblings("ul").slideUp(400);
            $(this).addClass("hover").siblings().removeClass("hover");
        })
 
        var oa = document.getElementById("menu").getElementsByTagName("a");
        for (i = 0; i < oa.length; i++) {
            oa[i].onclick = function () {
                var tit = self.parent.frames["title"].document.getElementsByTagName('div')[0].getElementsByTagName('p')[0];
                tit.innerHTML = this.innerHTML;
                for (i = 0; i < oa.length; i++) {
                    oa[i].className = '';
                }
                this.className = "cur";
            }
            oa[i].onfocus = function () {
                this.blur();
            }
        }
    </script>
    </form>
</body>
</html>