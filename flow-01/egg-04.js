// Arrays(数组)
// @flow
function total(numbers: Array<number>) {
   var result = 0;
   for (var i = 0; i < numbers.length; i++) {
	result += numbers[i];
   }
   return result;
}
// 这里只能传入数组因为total规定Array<number>，可以试着传入英文会出错
total([1,2,3,4]);
