//3. Nullable types
//Flow 处理 null 的方式跟大多数类型系统不太一样。如果检测工具没有仔细地跟踪好 null 的使用， 那么可能会误导你，让你认为你的代码都没问题了，于是在非法使用 null 的时候就悲剧了。
// @flow
(function() {
   function length(x) {
     return x.length
   }
  // 这里需要传入一个具有length的字符串，如果传入null会报错
  var total = length('hello') + length('world');
})
