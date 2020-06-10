// console.log(Number('0b11'));
// console.log(Number('0o11'));
// console.log(Number('0x11'));、

// console.log(2 ** 2)
// console.log(Math.trunc(5.55));
// console.log(Math.sign(0));

// function fn(x, y) {
// 	return x + y;
// }

// console.log(fn(...[1,2]))

// console.log(Math.max(...[3,2,1]))
// console.log([...[1,2],...[3,4]])
// let arr1 = Array(3);
// let arr = Array.of(3);
// console.log(arr)   // [ 3 ]  
// console.log(arr1)  //[  <3 empty items> ]  3位的空数组

// var obj = {
// 	0: 'name',
// 	1: 'age',
// 	2: 'gender',
// 	length: 3
// }

// console.log(Array.from(obj))  // [ 'name', 'age', 'gender' ]

// let arr = [10,20,30,40,50];
// console.log(arr.find(value => value === 20))  // 20
// console.log(arr.find(value => value > 20))  // 30
// console.log(arr.findIndex(value => value === 20))  // 1

// let arr = [1,2,3,4,5];
// console.log(arr.fill('a'))  // [ 'a', 'a', 'a', 'a', 'a' ]
// console.log(arr.fill('a',1,3))

// console.log(arr.copyWithin(2,0))  // [ 1, 2, 1, 2, 3 ]

// function fn(name , age){
// 	return {name, age}
// }

// console.log(fn('Mr.z',10))

// let obj = {
// 	// ES6的写法
// 	fn (){
// 		return 'es6'
// 	}
// }

// console.log(obj.fn())

// let myName = 'name';
// let obj = {
// 	[myName] : "Mr.z"
// }
// console.log(obj[myName])
// console.log(obj.name)

// let obj = {
// 	['f'+'n'](){
// 		return 'es6'
// 	}
// };
// console.log(obj.fn())

// console.log(Object.is(NaN, NaN))   // true
// console.log(Object.is(+0, -0))  // false

// var obj = {
// 	fn(){
// 		return 'fn'
// 	}
// }

// let f = {};
// Object.setPrototypeOf(f,obj)  // 设置f的原型对象为 obj
// console.log(f.fn())
// console.log(Object.getPrototypeOf(f) === obj)   // 检测obj是否是f的原型对象

var obj = {
	fn1(){
		return 'fn1'
	}
}

let f = {
	fn(){
		return super.fn1() + ', extend'
	}
};
Object.setPrototypeOf(f,obj)  // 设置f的原型对象为 obj
console.log(f.fn())  // fn1, extend
