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
//该步骤返回一个函数，并且将参数5和12转换为数组[5]
var curriedAdd=curry(add,"a");
//该步骤很关键，实际上是在执行返回函数，传入一个参数3。

var curriedAdd2=curry(curriedAdd,"c");
var printstr2=curriedAdd2("d");
console.log(printstr2);

//我们回到返回函数看看，首先，它会将3这个参数数组化[3],然后将其合并到[5]中，变成[5,3],最后返回对传入函数（第一个参数）的调用。
