// let p = new Promise((resolve, reject) => {
// 	if(true){
// 		resolve('执行成功')
// 	}else{
// 		reject('执行失败')
// 	}
// });

// p.then((value) => {
// 	console.log(value);
// }).catch((reason) => {
// 	console.log(reason)
// });

// p.then((value) =>{
// 	console.log(value);
// },(reason) => {
// 	console.log(reason)
// });

// let p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('1.异步')
// 	}, 3500)
// });

// let p2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('2.异步')
// 	}, 800)
// });

// let p3 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve('3.异步')
// 	}, 1500)
// });

// let p = Promise.all([p1,p2,p3])
// let p = Promise.race([p1,p2,p3])
// p.then((value) => {
// 	console.log(value)  // 2.异步/ / [ '1.异步', '2.异步', '3.异步' ]
// });

// p1.then((value) => {
// 	console.log(value);  // 调用p1
// 	return p2;
// }).then((value) => {
// 	console.log(value);  // 调用p2
// 	return p3;
// }).then((value) => {
// 	console.log(value)  // 调用p3
// });


let p1 = Promise.resolve('成功');
let p2 = Promise.reject('失败')
p1.then((value) => {
	console.log(value)
});
p2.then((value) => {
	console.log(value)
});
