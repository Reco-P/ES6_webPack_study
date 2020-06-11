let p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('1.异步')
	}, 3500)
});

let p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('2.异步')
	}, 800)
});

let p3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('3.异步')
	}, 1500)
});

// let as = async() => {
// 	let result = await p2;
// 	console.log(result)
// };

// as();

// async function as(){
// 	let all = [await p1, await p2, await p3];
// 	console.log(all)   // [ '1.异步', '2.异步', '3.异步' ]
// 	// let r1 = await p1,
// 	//     r2 = await p2,
// 	// 	r3 = await p3;
		
// 	// console.log(r1);
// 	// console.log(r2);
// 	// console.log(r3);
// }

// as();
// 1.异步
// 2.异步
// 3.异步

async function as(){
	return 'async'
}

// console.log(as())  // Promise { 'async' }

as().then((value) => {
	console.log(value)   // async
});