// 块级作用域
// (function (){
// 	var vaule = 10;
// }());
// console.log(value)

// let info = ['Mr.z', 100, '男'];
// let [name, age, gender] = info;

// let [name, [age, gender]] = ['Mr.z', [100, '男']];
// let [name, age, gender='男'] = ['Mr.z', 100];
// let [name, ...other] = ['Mr.z', 100, '男'];
// let obj = {
// 	name: 'Mr.z',
// 	info: {
// 		age: 100,
// 		gender: '男'
// 	}
// };
// let {name, info:{age, gender}} = obj

// console.log(age)
// console.log(gender)
// console.log(other)
// console.log(myname)

// let key = 1;
// let value = 'Mr.z';
// // 解构操作，变量互换
// [key, value] = [value, key];
// console.log(key)
// console.log(value)

// function fun(){
// 	return ['Mr.z', 100, '男']
// }
// let [name, age, gender] = fun();
// console.log(name)
// console.log(age)
// console.log(gender)

// function fun([name, age, gender]){
// 	console.log(name)
// }
// fun(['Mr.z', 100, '男']);

// let [x, y, z] = 'abc';
// let {length:len} = 'abc';
// console.log(y)
// console.log(len)

// function fun(number = 100,age = 111){
// 	console.log(number);
// 	console.log(age);
// }
// fun(123,[111,222]);

// function fun(number = 100,age = 111){
// 	console.log(number);
// 	console.log(age);
// }
// fun(undefined, 222);


function fn(){}
let fn2 = function(){};
let obj = {
	fn3: function(){}
};
console.log(fn.name)
console.log(fn2.name)
console.log(obj.fn3.name)
console.log((new Function()).name)   // anonymous 匿名函数