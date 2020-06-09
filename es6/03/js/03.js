// let fn = name => name;
// console.log(fn('Mr.z'))

// function fn(name){
// 	return name
// }

// ((age) => {
// 	console.log(age)
// })('22');

// let obj = {
// 	name: 'Mr.z',
// 	age: 22,
// 	fn: function(){
// 		setTimeout(function(){
// 			console.log(this.name + ',' + this.age);  // 此时this指向window
// 		}, 500)
// 	}
// }
// obj.fn();

// let obj = {
// 	name: 'Mr.z',
// 	age: 22,
// 	fn: function(){
// 		_this = this;
// 		setTimeout(function(){
// 			console.log(_this.name + ',' + _this.age); 
// 		}, 500)
// 	}
// };
// obj.fn();

// let obj = {
// 	name: 'Mr.z',
// 	age: 22,
// 	fn: function(){
// 		_this = this;
// 		setTimeout(() => console.log(_this.name + ',' + _this.age), 500)
// 	}
// };
// obj.fn();

// let arr = [3, 2, 1].sort((a, b) => a-b);
// console.log(arr)

// let fn = (...other) => {
// 	return other[0] + other[1];
// }
// console.log(fn(1,2))
// 'use strict'

// function fn (x) {
// 	if (x<=1) {
// 		return 1;
// 	}
// 	return fn(x - 1);
// }
// console.log(fn(10))

// console.log(String.fromCodePoint(134071));
// console.log('abc'.includes('a'))
// console.log('abc'.startsWith('a'))
// console.log('abc'.endsWith('c'))

// console.log('x'.repeat(2))
// console.log('x'.padStart(2,'0'))
// console.log('x'.padEnd(2,'0'))

// let name = 'Mr.z',
//     age = 22;
// console.log(`名字: ${name}, 年龄: ${age}`)

// console.log(`${1+1}`)

// console.log(`${true ? (true ? `${2}` : `${3}`) : 'false' }`)

// console.log(String.raw`我\n是`);