/* @flow */

var pizzas = [
    { title: 'Margherita', vegetarian: true },
    { title: 'Pepperoni', vegetarian: false },
    { title: 'Four cheese', vegetarian: true },
    { title: 'Hawaiian', vegetarian: false },
  ];
  
  function vegetarianPizzas() {
      // 这里引用了第三方库underscore-min.js，如果不忽略检查就会报Cannot resolve name _.这个错误
      // 解决办法：告诉flow不去检查第三方库，第一步在.flowconfig中加入[libs]  interfaces 第二步新建interfaces然后写入忽略内容具体见该demo
    return _.findWhere(pizzas, {vegetarian: true});
  }