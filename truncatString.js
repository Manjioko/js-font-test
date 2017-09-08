/*
* @Author: 64389
* @Date:   2017-09-08 21:01:36
* @Last Modified by:   64389
* @Last Modified time: 2017-09-08 21:05:46
*/
//截断一个字符串

function truncate(str, num) {
	//定义一个感人的“...”结尾
  var threeDot="...";
  //判断如果传入的字符串长度大于传入的数字，那么执行第二个if。
  if(str.length>num){
  	//如果传入的数字小于“...”的长度，执行执行if。否则执行else。
    if(num<threeDot.length){
      return str.split("").slice(0,num).join("")+threeDot;
    }else{
      return str.split("").slice(0,num-threeDot.length).join("")+threeDot;
    }
    
  }
  //return str;
}

truncate("A-", 1);