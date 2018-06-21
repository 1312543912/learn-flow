//2. Add type annotations（类型注释 / 类型注解）
//在大多数情况下，Flow 都能够探测出具体类型，所以你不需要给每个方法、变量都添加类型注///解。 虽说 Flow 能探测出类型，但是你依然可以严格声明类型。 只有下面这类情况才 必须 明确地声明类型：变量/方法/类 是从别的模块中导入的（在别的文件定义）
// @flow

(function() {
    // 这里返回string会出错，因为这里应该返回number类型
    function foo(x: string, y: number): number {
    	return x.length*y;
    }
foo('hello', 24);
});
