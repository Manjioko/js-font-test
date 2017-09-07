/*
* @Author: 64389
* @Date:   2017-09-07 18:42:37
* @Last Modified by:   64389
* @Last Modified time: 2017-09-07 18:49:16
*/


//从一个二维数组里的每个单维数组中提取出最大值，形成一个新数组。
function largestOfFour(arr) {
	//创建一个新的空数组用于存放提取出的最大数值。
  var largestNum=[];

  //用for(){}来遍历每个数组，并且提取出最大数值。
  for(var i=0;i<arr.length;i++){

  	//用Math.max.apply()提取单维数组中的最大值，并赋值给一个新的变量。
    var newarr=Math.max.apply(null,arr[i]);

    //将变量的值添加到新的数组中。
    largestNum.push(newarr);
  }
  返回数组
  return console.log(largestNum);
}

//执行函数，参数为一个二维数组。
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);