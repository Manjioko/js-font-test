/*
* @Author: 64389
* @Date:   2017-09-10 17:12:25
* @Last Modified by:   64389
* @Last Modified time: 2017-09-10 17:14:35
*/
//这道题不难，就是操作ASCII码，两个函数用得正确了，还有对照ASCII码，题就做出来了
//题目描述链接：https://www.freecodecamp.cn/challenges/caesars-cipher
//str.charCodeAt()是将字符转换为ASCII数值，String.charCodeChar()将数值转换成ASCII字符。
//很好玩的一个小程序，可以将整篇文章都转换掉
function rot13(str) {
	var rotCode=[];
	var finallystr="";
	for (var i = 0; i < str.length; i++) {
		rotCode.push(str.charCodeAt(i));
	}
	for (var j = 0; j < rotCode.length;j++) {
		if(64<rotCode[j]&&rotCode[j]<123){
			rotCode[j]+=13;
			if (rotCode[j]>90&&rotCode[j]<123) {
				rotCode[j]+=6;
			}
		}
		finallystr+= String.fromCharCode(rotCode[j]).toUpperCase();		
	}
	console.log(finallystr);
	return finallystr;
}
rot13("To be or not to be,that's a question.");
//莎士比亚的金句
//运行结果是：G| UX | {| | UX,{T' T ~X||{.
//满满的极客风格啊，你们还在等什么？！ 