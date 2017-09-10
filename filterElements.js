/*
* @Author: 64389
* @Date:   2017-09-10 14:13:46
* @Last Modified by:   64389
* @Last Modified time: 2017-09-10 14:17:57
*/
//删除数组里面的某个元素
function destroyer(arr) {
    //console.log("The number of parameters is " + arguments[0]);
    //console.log([].slice.call(arguments))
    //将destroyer参数全部转换成数组
    var newArr=[].slice.call(arguments);
    //删除第一个数组[1,2,3,1,2,3]
    newArr.splice(0,1);
    //剩下[2,3]
    
    //过滤arr中和[2,3]相同的元素
    return arr.filter(function(val){
    	//-1表示不同，0表示相同
      return newArr.indexOf(val)==-1;
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
