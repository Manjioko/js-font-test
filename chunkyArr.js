/*
* @Author: 64389
* @Date:   2017-09-08 22:05:57
* @Last Modified by:   64389
* @Last Modified time: 2017-09-08 22:17:30
*/
//分段截取单维数组，使之成为一个新的多维数组。
function chunk(arr, size) {
	//创建一个空数组，用于存放截取后的新的数组。
  var sizeArr=[];
  //判断数组是否由数字组成，如果是，则执行if。
if(typeof(arr[0])==="number"){
	//函数一共传入两个参数，一个是需要截取的源数组arr，一个是截取的数组的长度size，用for循环遍历数组，每个size遍历一遍。
      for(var i=0;i<arr.length;i+=size){
      	//如果数组为数字，直接用slice()函数返回每个size内的值。
        var getnum=arr.slice(i,i+size);
        //添加到新数组中
        sizeArr.push(getnum);
      }
    return sizeArr;
    }else{	//如果是字符串数组，则执行else。
      	//同理用for循环遍历
	  for(var j=0;j<arr.length;j+=size){
      	//先将遍历的每一组数组转换成字符串，再切割成数组
        var getSt=arr.slice(j,j+size).join(",").split(",");
        //添加到新数组
        sizeArr.push(getSt);
        
    }
    	//返回新数组
      return sizeArr;
    }
}

//执行函数
chunk([0, 1, 2, 3, 4, 5], 4);