// let arr = new Set();
// arr.add(1);
// arr.add(2);
// arr.add(2);
// arr.add('2');
// // console.log(arr)  // Set { 1, 2, '2' }
// // console.log(arr.length)  // undefined
// // console.log(arr.size)  // 3

// // console.log(arr.has(2))  // true
// // console.log(arr.delete(2))  // true
// // console.log(arr)  // true   Set { 1, '2' }
// // console.log(arr.has(2))  // true

// console.log([...arr])

// let map = new Map();
// map.set('name', 'Mr.z');
// map.set('age', 22);
// console.log(map);  // Map { 'name' => 'Mr.z', 'age' => 22 }
// console.log(map.get('name')) // Mr.z

// function *cit(){
// 	yield 1;
// 	yield 2;
// 	yield 3;
// }

// let it = cit();
// console.log(it.next());  // { value: 1, done: false }
// console.log(it.next());  // { value: 2, done: false }
// console.log(it.next());  // { value: 3, done: false }
// console.log(it.next()); // { value: undefined, done: true }

// function *fn(arr){
// 	for(let i=0; i<arr.length; i++){
// 		yield arr[i];
// 	}
// }

// let it = fn([1,2,3])
// console.log(it.next().value)  // 1
// console.log(it.next().value)  // 2
// console.log(it.next().value)  // 3

// let arr = [1,2,3,4,5]
// console.log(arr.keys())  // Object [Array Iterator] {}
// console.log(arr.values())  // Object [Array Iterator] {}
// console.log(arr.entries())  // Object [Array Iterator] {}
let arr = [1,2,3,4,5]
for(let i of arr.entries()){
	console.log(i)
}
// [ 0, 1 ]
// [ 1, 2 ]
// [ 2, 3 ]
// [ 3, 4 ]
// [ 4, 5 ]