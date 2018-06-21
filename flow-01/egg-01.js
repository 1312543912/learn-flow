//我们调用 foo 方法，使用 string 类型参数，不过 foo 方法期望的参数是 number 类型的。 Flow 能够检测到这个问题并且给出错误提示。解决这个错误的一个方案就是调用 foo 时用 number 类型参数

// @flow
//这个注释很关键：它告诉 Flow 这个文件需要检测。 如果某些文件不带这个注释，Flow 则会忽略检测这些文件
(function() {
    function foo(x) {
    	return x * 10;
    }
    // 这里正常需要写数字的如果你写string类型，会报错
    foo(10)
});


