/*
* @Author: 64389
* @Date:   2017-09-05 20:07:08
* @Last Modified by:   64389
* @Last Modified time: 2017-09-05 20:08:14
*/
function palindrome(str) {
  //使用replace()替换所有的标点符号，首先建立一个正则表达式。
  var re=/\W|_/g; // /\W表示所有的标点符号 /g是全局代替的意思,|_是忽略下划线的意思。
  
  //首先检查参数str是否包含标点符号，有则替换它,并且全部转换成小写字母。
  var cutStrPut=str.replace(re,'').toLowerCase();
  
  //使用reverse_a_string.js中提供的方法翻转字符串。
  var strToArr=cutStrPut.split("");
  var reArr=strToArr.reverse();
  var ArrToStr=reArr.join("");

  //判断是否正反一致？
  if (cutStrPut==ArrToStr){
    return true;
  }else{
    return false;
  }
  


}

//执行函数。

palindrome("eYe");
