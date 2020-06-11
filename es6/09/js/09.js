// class Person {
// 	// 构造函数（构造方法）
// 	constructor(arg) {
// 	    // this.arg是类的属性
// 		// 参数赋值给属性
// 	    this.arg = arg; 
// 	}
	
// 	// 普通方法
// 	run(){
// 		return '输出:'+this.arg;
// 	}
// }

// // 实例化一个Person对象
// let p = new Person('Mr.z');
// console.log(p.run());
// console.log(p.arg);
// console.log(p instanceof Person);  // true
// console.log(typeof Person);  // function 说明 Person 本质上还是一个函数

// class Person {
// 	#arg   // 私有声明
// 	// 构造函数（构造方法）
// 	constructor(arg) {
// 	    this.#arg = arg;  //私有属性, 类外无法访问
// 	}
	
// 	get arg(){
// 		return this.#arg;
// 	}
	
// 	set arg(value){
// 		this.#arg = value;
// 	}
	
// 	// 普通方法
// 	run(){
// 		return '输出:'+this.arg;
// 	}
// }

// // 实例化一个Person对象
// let p = new Person('Mr.z');
// p.arg = 'Mr.x';
// console.log(p.arg);   // Mr.x
// class Person {
// 	constructor(arg) {
// 	    this.arg = arg; 
// 	}
	
// 	run(){
// 		return '输出:'+this.arg;
// 	}
// }

// class Children extends Person{
	
// }

// let c = new Children('Mr.hahaha');
// console.log(c.arg);   // Mr.hahaha
// console.log(c.run());  // 输出:Mr.hahaha

// class Person {
// 	constructor(arg) {
// 	    this.arg = arg; 
// 	}
	
// 	run(){
// 		return '输出:'+this.arg;
// 	}
// }

// class Children extends Person{
// 	constructor(arg, age) {  // 覆写构造
// 		super(arg);  // 执行父类构造并传参
// 		this.age = age;
// 	}
	
// 	run(){  //覆写方法
// 		return super.run() + this.age;  // 执行父类方法并返回内容
// 	}
// }

// let c = new Children('Mr.hahaha', 22);
// console.log(c.run());   // 输出:Mr.hahaha22
// console.log(Object.getPrototypeOf(Children) === Person)  // true

class Person {
	static gender = '男';

}

class Children extends Person{
	static gender = '女';
}

console.log(Person.gender)  // 男
console.log(Children.gender)  //女