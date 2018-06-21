//5.Dynamic code (动态代码)  这里我们没有给函数返回类型注释类型， 但是我们在调用的时候传递了两个不同类型的参数
// @flow
(function() { 
function foo(x) {
  if (typeof x === 'string') {
    return x.length;
  } else {
    return x;
  }
}
// 这里不能写数字不然会报错，因为number没有length属性。
var res = foo('Hello') + foo('world');
});  
