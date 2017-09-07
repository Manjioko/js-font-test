/*
* @Author: 64389
* @Date:   2017-09-07 20:06:30
* @Last Modified by:   64389
* @Last Modified time: 2017-09-07 20:38:06
*/
//这道题有点跳啊，我心里挺难过的，问题的描述很可怕，这里我还是放链接吧，不然估计都不知道我写的是啥。
//链接：https://www.freecodecamp.cn/challenges/confirm-the-ending
//我还是简单描述以下吧；事情是这样的，我们写一个js函数，传入两个参数str和target,如果str是单单一个单词（字符串），那么
//那么我们就判断str的结尾最后一个字符是否和target相同，如果相同,返回true,不相同，返回false。看起来很简单嘛
//但是他妈的坑爹啊，如果传入的str不是一个字符串，而是一堆字符串组成，那么首先先判断这一堆翔里最后一个字符串是否和
//target一致，一致就返回true。如果不一致，那么问题来了，比如说，传入一堆翔里面最后一个字符串是shit,那么target在以下情况下，函数
//返回true,那就是 target = t or =it or =hit or =shit，也就是说，target只要传入值和这堆字符串中最后一个字符串
//倒数第n个字符都相符，那么就是ture,否则就是false咯，哎呀好复杂，套路套路。最后我再BB两句，写代码前务必回顾一下你的
//学生时代，如果语文水平不好，那么放弃当程序员的念头吧，求你了。
//以下是实现过程

function confirmEnding(str, target) {

	//首先将字符串拆分成数组。
  var strArr=str.split(" ");
  //数组是存单个字符串还是多个字符串，单个字符串则执行if语句。
  if(strArr.length==1){
    var judge=strArr[0].substr(strArr[0].length-1,1);
    if(judge===target){
      return true;
    }else{	
      return false;
    }//else end
  }else if(strArr.length!==0 && strArr.length>1){	//如果是多个字符串，则执行这里。

  	//取多维数组里面最后一个字符串。
    var judges=strArr[strArr.length-1];

    //如果最后一个字符串长度与参数target长度一致，执行if语句。
    if(judges.length===target.length){
      
      if(judges===target){	//判断是否字符串内容是否一致
        return true;
      }else{
        return false;
      }//else end
    }else{//if end else start
      //字符串长度不一样，就执行else。
      //用for语句循环字符串的每个字符，并且从倒数第一个开始跟target 匹配，如果内容一致，返回true,内容不一致
      //继续循环，判断字符 倒数第一+倒数第二 是否等于target，是就返回true,循环到完整个字符，如果都不一致
      //for循环结束，返回一个false。
        for(var i=1;i<judges.length;i++){
     		var addLastStr=judges.slice(judges.length-i); 
      
     		if(addLastStr===target){
        		return true;
      			}//if end
      
    		}//for end
    	return false;
      
    	}//else end
    
    
  }//else if end
}

//执行函数
confirmEnding("He has to give me a new name", "name");