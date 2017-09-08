/*
* @Author: 64389
* @Date:   2017-09-08 23:31:15
* @Last Modified by:   64389
* @Last Modified time: 2017-09-08 23:45:43
*/
//传入一个数组，如果数组内的第一个字符串包含第二个字符串中的所有字符，那么返回true,否则返回false。
function mutation(arr) {
	//创建里两个变量，分别将参数内的两个字符串重新切割成数组，赋予两个变量。忽略大小写。
  var arrFirstStr=arr[0].toLowerCase().split("");
  var arrLastStr=arr[1].toLowerCase().split("");
  //创建一个新数组，用于保存比较后的字符串
  var numArr=[];
  //如果两个字符串相同，那么直接返回true,用不着一个个去遍历查找了。
  if(arrFirstStr.join("")===arrLastStr.join("")){
      return true;
    }
    //如果不一样，用for双重遍历去查找每一个字符，首先第一个for遍历arrFirstStr。
  for(var i=0;i<arrFirstStr.length;i++){
    //第二个for遍历arrLastStr
	for(var j=0;j<arrLastStr.length;j++){
      	//判断在arrLastStr中是否有字符和arrFirstStr[i]相同。
		if(arrFirstStr[i].indexOf(arrLastStr[j])===0){
			//如果相同，将值添加到numArr。
			numArr.push(arrLastStr[j]);

		}

	}	//判断arrLastStr的值是否都存在arrFirstStr中，如果都存在了，那么返回值的长度就与arrLastStr长度值相同。
	    if(numArr.length===arrLastStr.length){
	    	//都存在，返回true.
		    return true;
	}
		}
	//遍历结束后如果都没有返回true,那么就说明arrLastStr中有字符没有和arrFirstStr任何一个字符相对应，则返回false。
  return false;

}
//执行函数

mutation(["hello", "Heoll"]);

//javascript的花括号和C一样，反人类啊，我看着眼都花了妈蛋。
