// 自己定义的全局函数
export default{
  install(Vue,options){
    Vue.prototype.getCookie = function(name){
      //处理cookie
      //此处需要注意第二项的前面有空格
      var cookirarray = document.cookie.split(";");
      for(var i=0;i<cookirarray.length;i++){
        var arr=cookirarray[i].split("=");
        //找到名称为name的cookie，并返回它的值
        var arritem=arr[0];
        if(arritem.substr(0,1)==' '){
          arritem=arritem.substring(1,arritem.length)
        }
        if(arritem==name){
         return arr[1];
        break;
        }
      }
      return -1;
    }
  }
}
