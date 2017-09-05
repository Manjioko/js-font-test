/*
* @Author: 64389
* @Date:   2017-09-05 18:15:47
* @Last Modified by:   64389
* @Last Modified time: 2017-09-05 18:28:08
*/
function reverseString(str) {
  // 请把你的代码写在这里
  var arr=str.split("");
  var arrRr=arr.reverse();
  var string=arrRr.join("");
  return string;
}

reverseString("hello");