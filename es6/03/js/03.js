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
'use strict'

function fn (x) {
	if (x<=1) {
		return 1;
	}
	return fn(x - 1);
}
console.log(fn(10))