//找出一个一段文字中单词数最长的单词。

function findLongestWord(str) {
  
  //先将字符串分成单个的字符串数组。
  var strArr=str.split(" ");
  
  //创建一个空数组变量，用于存放strArr的字符串长度（数字）。
  var intArr=[];
  
  //用for遍历每一个字符串，得出它们的长度，并且添加到intArr中。
  for(var i=0;i<strArr.length;i++){
   
    intArr.push(strArr[i].length);
    
  }
  
  //使用Math.max.apply()函数，传入两个参数，第一为null（空），第二个为intArr数组，返回intArr数组中最大的值。
  return Math.max.apply(null,intArr);
}

//执行函数

findLongestWord("The quick brown fox jumped over the lazy dog");