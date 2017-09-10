/*
* @Author: 64389
* @Date:   2017-09-10 12:12:04
* @Last Modified by:   64389
* @Last Modified time: 2017-09-10 12:16:02
*/
//我们用用最简单的办法过滤掉数组中的布尔值。
function bouncer(arr) {
	//直接用filter()函数过滤掉里面的布尔值，内置函数的意思是返回arr里面的布尔值，然后filter函数作用就是过滤返回值，返回什么就过滤什么
  return arr.filter(function(item){return Boolean(item);});
}
//执行函数
bouncer([7, "ate", "", false, 9]);