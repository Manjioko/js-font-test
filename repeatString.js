/*
* @Author: 64389
* @Date:   2017-09-07 20:58:55
* @Last Modified by:   64389
* @Last Modified time: 2017-09-07 21:02:25
*/

//重要的事情要说三遍
function repeat(str, num) {
	//空字符，为储存添加的字符所用
  var repeatStr="";
  //添加字符到空字符串中
  if(num>0){
    for(var i=0;i<num;i++){
      repeatStr+=str;
    }
    
  }else{
  	//如果参数num为负数，则返回一个空字符串。
    
    return "";
  }
  //返回储存完成后的字符串。
  return console.log(repeatStr);
}

repeat("Ciao", 1000);