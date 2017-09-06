/*
* @Author: 64389
* @Date:   2017-09-06 23:00:25
* @Last Modified by:   64389
* @Last Modified time: 2017-09-06 23:00:40
*/
function titleCase(str) {
  
  //首先先把字符串转换成数组。
  var strArr=str.split(" ");
  
  //遍历每一个字符串，改变它。
  for(var i=0;i<strArr.length;i++){
    //chrAt(0),提取字符串的首字母，toUpperCase()转换成大写，slice(1)函数表示从返回从1到字符串的最后一个字符，toLowerCase()转换成小写。
    strArr[i]=strArr[i].charAt(0).toUpperCase()+strArr[i].slice(1).toLowerCase();
    //strArr[i]=strArr[i].charAt(0)+strArr[i].slice(1).toLowerCase();
    
  }
  
  
  //返回字符串
  return strArr.join(" ");
}


titleCase("I'm a little tea pot");
