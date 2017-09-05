/*
* @Author: 64389
* @Date:   2017-09-05 18:57:34
* @Last Modified by:   64389
* @Last Modified time: 2017-09-05 19:20:31
*/

function factorialize(num) {
  //创建一个变量来储存结果,并且初始化为参数num值。
  var slt=num;
  //由于阶乘是从1开始算，而不负数或者零。所以我们创建一个判断语句。
  if(num<0){
    return -1;
  }else if(num==0||num==1){
    return 1;
  }else{
    
  //我们使用while 语句计算阶乘。
  while(num>1){
  	//这里存在优先级问题，所以我们分两步骤来进行计算，本来打算这样写的：slt*=num--。
    num--;
    slt*=num;
    
  }
  return slt; 
    
  }

  
}

factorialize(0);
