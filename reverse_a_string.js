/*
* @Author: 64389
* @Date:   2017-09-05 18:15:47
* @Last Modified by:   64389
* @Last Modified time: 2017-09-05 18:39:59
*/
function reverseString(str) {

//首先split()函数将字符串切割为单个字符，并且包含在一个数组内，参数必须是“”才能切割成单个字符。
  var arr=str.split("");

//翻卷数组内的字符串，用reverse函数。
  var arrRr=arr.reverse();

//将数组转换为字符串，用join()函数，参数使用“”。
  var string=arrRr.join("");

//返回字符串。
  return string;
}

//执行函数，参数为字符串hello world。
reverseString("hello");