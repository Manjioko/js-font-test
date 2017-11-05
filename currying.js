function curry(fn){
    //把参数这个伪数组转换成真实的数组，从第二个值
    //开始数组化，第一个值保留。
    var args=[].slice.call(arguments,1);
    return function(){
        //此arguments是返回函数的arguments，而不是curry
        //函数的arguments,将其也数组化。
        var innerArgs=[].slice.call(arguments);
        //将curry函数和返回函数的参数合并成一个数组。
        var finalArgs=args.concat(innerArgs);
        //返回函数返回对curry函数的第一个参数的调用，调用传入的
        //参数为finalArgs。
        return fn.apply(null,finalArgs);
    }
}


//应用curry函数。

//应用的对象函数。
function add(num1,num2,num3){
    return num1+num2+num3;
}
//开始
//柯里化，添加数组为["a"]
var curriedAdd=curry(add,"a");
//第二次进行柯里化
var curriedAdd2=curry(curriedAdd,"c");
//执行函数
var printstr2=curriedAdd2("d");
//打印输出
console.log(printstr2);//acd

//柯里化的关键点在于闭包的娴熟运用，闭包的特性在于  当闭包调用创建该闭包的函数之变量时，被调用的函数保持活跃（保持对象活跃），即没有完全退出函数
//自然也不会被清除掉，所以其定义的变量会保存最后一次变化的值
