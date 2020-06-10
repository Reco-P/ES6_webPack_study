let obj = {
	name: 'Mr.z',
	age: 22,
	gender: '男'
}

let p = new Proxy(obj, {  //参数一 拦截的目标对象， 参数二 拦截行为
	// get(target, property){
	// 	if(property === 'age'){
	// 		return target[property] - 2;
	// 	}else{
	// 		return 'fail';
	// 	}
	// },
	set(target, property, value){
		if(property === 'age'){
			target[property] = value;
		}
	}
});

p.age = 30;
console.log(p.age);


// console.log(p.name)  // fail
// console.log(p.age)  // 22