# ES6_webPack_study
es6语法,模块化及webpack打包

### let const
```
1. var 出了块级作用域有效， let 出了块级作用域无效
2. var 具有变量提升的能力， let不具备
3. var 可以重复声明一个变量， let不可以
4. let 更适合局部变量
5. 在一个区块内部，只要使用了let声明，这个区域就形成了封闭的作用域
6. 如果在let声明前使用变量，这段区域被称为'临时锁区(或暂时性锁区)'，临时死区，使用typeof也会报错
7. 在循环中，var与let的区别尤为明显，var 全局有效，导致后续使用i会引起干扰，而let不会
8. 如果在循环体内设置函数方法，体外输出var会得不到预期数值
```
```
1. const声明的作用是：创建一个只读的常量，一旦声明不可改变
2. 与let 声明一样，const声明的常量无法提升， 也存在临时死区
3. 和elt 声明不同的是，const 声明常量后必须立刻赋值，否则会报错
   const PI = 3.14;
   console.log(PI); // 常量约定俗成大写
```

### 块级作用域
```
1. ES6之前只有全局作用域与函数作用域，并没有块级作用域
2. 循环体和条件体就是块级作用域，{} 中
3. 如果在块级作用域里不使用 let ，就会造成全局变量污染的问题
4. {{{...}}}块级作用域支持多层嵌套，每一层均是封闭的，只作用于此
5. 在ES6之前，采用自我执行匿名函数的方式来防止变量污染
   (function (){
   	var vaule = 10;
   }());
   console.log(value)  //报错
   
   {
	 let value = 10;
   }
6. 块级作用域内的函数声明，在全局作用域内依旧可以访问
7. 解决方式是：使用函数表达式的方式创建
  {
	let fun = function(){};
  }
```

### 数组与对象的解构
```
1. 为何要解构操作？  	JSON格式的普及，导致大量数据提取工作
2. 数组解构赋值：1.分行解构，2.单行解构
	let info = ['Mr.z', 100, '男'];
	let [name, age, gender] = info;
	console.log(name)
	console.log(age)
	console.log(gender)
	
	let [name, age, gender] = ['Mr.z', 100, '男'];
	
3. 无论是单行还是分行解构，都必须一一匹配
   //数组层次也需要匹配
   let [name, [age, gender]] = ['Mr.z', [100, '男']];
   
   //用逗号作为占位符不赋值
   let [, , gender] = ['Mr.z', 100, '男'];
4. 在变量解构时，可以在数组的元素中设置一个默认值
   let [name, age, gender='男'] = ['Mr.z', 100];
   
5. 还有一种 ...var 的语法，可以将没有赋值的内容都赋值给这个变量
   let [name, ...other] = ['Mr.z', 100, '男'];
```
```
1. 对象解构，与数组解构相似
   let obj = {
   	name: 'Mr.z',
   	age: 100
   };
   let {name, age} = obj
   
2. 对象解构也可以设置一个默认值
   let obj = {
	 name: 'Mr.z'
   };
   let {name, age = 100} = obj;
   
3. 如果不想要对象属性名作为解构变量，可以通过键值对的方式改变属性名
   let obj = {
   	name: 'Mr.z'
   };
   let {name:myname} = obj
   
4. 嵌套对象--解构可以通过键值对方式
   let obj = {
   	name: 'Mr.z',
   	info: {
   		age: 100,
   		gender: '男'
   	}
   };
   let {name, info:{age, gender}} = obj
   
5. 对象的解构也支持单行简写
   let {name, age} = {'Mr.z', 100}

```
```
1. 其它解构--常用解构
   普通变量的 值交换
   let key = 1;
   let value = 'Mr.z';
   // 解构操作，变量互换
   [key, value] = [value, key];
   
2. 如果函数的返回值是一个数组或对象， 直接将函数进行赋值解构
   function fun(){
   	return ['Mr.z', 100, '男']
   }
   let [name, age, gender] = fun();
   
3. 当函数进行参数传递时，可以进行数组和对象字面量方式的传参
   function fun([name, age, gender]){
   	console.log(name)
   }
   fun(['Mr.z', 100, '男']);

4. 字符串的解构
   let [x, y, z] = 'abc';
   
   let {length:len} = 'abc';

```

### 函数的传参
```
1. ES6之前，函数是无法给参数设置默认值的， ES6支持了这一特性
   function fun(number = 100,age = 111){
   	console.log(number); // 123
   	console.log(age);  // [ 111, 222 ]
   }
   fun(123,[111,222]);
   
2. 如果只想传递第二往后的参数值，可以使用 undefined 占位
   function fun(number = 100,age = 111){
   	console.log(number);
   	console.log(age);
   }
   fun(undefined, 222);
   
3. 支持参数使二使用参数一的值作为默认值，反之不可以
   function fn(x, y=x){}

4. 解构变量有不确定元素，那么函数的传参也可以有不定参数
   function fn(x, ...y){}
   
5. name属性  用于获取函数名
   function fn(){}
   let fn2 = function(){};
   let obj = {
   	fn3: function(){}
   };
   console.log(fn.name)
   console.log(fn2.name)
   console.log(obj.fn3.name)
   console.log((new Function()).name)   // anonymous 匿名函数
   
```

### 箭头函数和this
```
1. 箭头函数
   let fn = name => name;
   console.log(fn('Mr.z'))
   
   function fn(name){
   	return name
   }
   
2. 箭头函数也可以传递两个或以上的参数，并实现运算后返回
   let fn = (x, y) => x+y;
   
3. 定义的函数不需要传参的话，可以直接用（）
   let fn = () => '123';
   
4. 如果函数体需要更复杂的操作，箭头函数右侧使用传统函数体
   let fn = (x, y) =>{
	   return x + y;
   }
   
5. 自执行函数也可以用箭头函数创建
   ((age) => {
   	console.log(age)
   })('22');
   
   (function(age){
	   console.log(age)
   })('22');
 
```
```
1. 绑定this  ES中的典型问题，this指向问题，当对象中包含了类似setTimeout函数内部，this的指向就会发生问题
   let obj = {
   	name: 'Mr.z',
   	age: 22,
   	fn: function(){
   		setTimeout(function(){
   			console.log(this.name + ',' + this.age);  // 此时this指向window
   		}, 500)
   	}
   }
   obj.fn();  // 输出 undefined,undefined
   
   解决方式： 1.将this在setTimeout外部进行赋值保存  2.箭头函数，箭头函数中的this是最外层的函数绑定，不受内部影响
   let obj = {
   	name: 'Mr.z',
   	age: 22,
   	fn: function(){
   		_this = this;          // 将this在setTimeout外部进行赋值保存
   		setTimeout(function(){
   			console.log(_this.name + ',' + _this.age); 
   		}, 500)
   	}
   };
   obj.fn();
   
   let obj = {
   	name: 'Mr.z',
   	age: 22,
   	fn: function(){
   		_this = this;
   		setTimeout(() => console.log(_this.name + ',' + _this.age), 500)    //使用箭头函数
   	}
   };
   obj.fn();
   
```
```
箭头函数扩展与尾调用

1. 箭头函数也支持一些内置函数的使用，比如 sort排序
   let arr = [3, 2, 1].sort((a, b) => a-b);
   console.log(arr)
   
2. 箭头函数不支持arguments绑定，请直接使用...other模式 
   let fn = (...other) => {
   	return other[0] + other[1];
   }
   console.log(fn(1,2))
   
3. 箭头函数和普通函数一样，可以用typeof 和 instanceof 验证

4. 尾调用：即在一个函数的最后可执行的一步调用了其他函数
   尾调优化：原因： 每次尾调用都会创建栈帧，如果尾调次数过多，则可能会出现程序问题
   必须满足下面条件，才可执行严格模式下的优化
   1. 尾调用必须 return 返回
   2. 尾调用 return 返回不得含其他操作
   'use strict'
   
   function fn (x) {
   	if (x<=1) {
   		return 1;
   	}
   	return fn(x - 1);
   }
   console.log(fn(10))
   
```
### 字符串的扩展与改进
```
新增方法
1. 处理超过两个字符（四字节）的异体字， ES6新增了 codePointAt（） 方法
2. 对于超过两个字符的，可以通过ES6新增的 String.fromCodePoint() 
  console.log(String.fromCodePoint(134071));
   
3. ES6提供的 normalize() 方法用于有音标的符号组合形成统一
4. ES6提供了三种判断字符串的方法 includes(), startWith(), endsWith(),若找到返回true
   console.log('abc'.includes('a'))   // true
   console.log('abc'.startsWith('a'))  // true
   console.log('abc'.endsWith('c'))  // true
   
5. repeat() 重复字符串， padStart() 补全字符串头部, endStart() 补全字符串尾部
   console.log('x'.repeat(2))  // xx
   console.log('x'.padStart(2,'0'))   // 0x 前补0，补全后一共两位
   console.log('x'.padEnd(2,'0'))  // x0 尾补0，补全后一共两位

```
```
模板字符串
1. 反引号实现变量解析--可用于字符串拼接
   let name = 'Mr.z',
       age = 22;
   console.log(`名字: ${name}, 年龄: ${age}`)
2. 支持表达式
   console.log(`${1+1}`)
   
3. 支持嵌套
   console.log(`${true ? (true ? `${2}` : `${3}`) : 'false' }`)
   
4. 可用String.raw来得到原生字符串
   console.log(String.raw`我\n是`);
   
```
### 正则的扩展改进
```
1. ES6提供了u修饰符， 对占两个字符特殊字进行正则识别
   /?{2}/.test('')  // false
   /?{2}/u.test('')  // true
   
2. ES6提供了 y 修饰符，它的作用是匹配过一次后继续往下匹配
   let text = 'xxx_xx_x_';
   let patt = /x+_/y;
   console.log(patt.exec(text))  // [ 'xxx_', index: 0, input: 'xxx_xx_x_', groups: undefined ]
   console.log(patt.exec(text))  // [ 'xx_', index: 4, input: 'xxx_xx_x_', groups: undefined ]
   console.log(patt.exec(text))  // [ 'x_', index: 7, input: 'xxx_xx_x_', groups: undefined ]
   console.log(patt.flags)   // y
   
3. 对于 y 修饰符， ES6提供了 stikcy 属性来检测是否存在 y 修饰符
   console.log(patt.stikcy)
   
4. ES6提供了 flags 属性，用于返回正则使用的修饰符名称
   
5. .表示匹配所有，除了终止符。换行\n，等使用 s 修饰符匹配
   let text = 'a\nbc';
   let patt = /x.+bc/s;
   console.log(patt.test(text));
   
6. ES6支持修饰符替换，之前会报错
   let regex = new RegExp(/xyz/iu, 'g');
   console.log(regex.flags)  // g
   
```
### 数值扩展
```
1. ES6明确二进制，八进制， 十六进制分别用 0b， 0o， 0x作为前缀
   console.log(Number('0b11'));
   console.log(Number('0o11'));
   console.log(Number('0x11'));
   
2. ES6提供了 Number.isFinitel(), Number.isNaN() 判断数值与NaN
3. ES6提供了 Number.parseInt(), Number.parseFloat() 转换整型与浮点型
4. ES6提供了Number.isInteger(), 来判断参数是否是一个整形
5. ES6提供了一个常量，值特别小，用于判断是否得到正确结果  Number.EPSILON
6. ES6新增了一个指数运算符 ** ,并且可以进行赋值运算
   console.log(2 ** 2)

7. Math对象新增了一些方法， .trunc(), .sign() 等
   console.log(Math.trunc(5.55));    // 去掉小数部分
   console.log(Math.sign(10));  // 判断正负，0，NaN  正数返回1，负数返回-1  0返回0, NaN返回NaN
   
```
### 数组的扩展与改进
```
扩展运算符
1. ES6提供了(...) 三点符号将数组转换为逗号分割
   function fn(x, y) {
   	return x + y;
   }
   
   console.log(fn(...[1,2]))
   
2. 扩展用法，
   console.log(Math.max(...[3,2,1]))   // 求最大值
   console.log([...[1,2],...[3,4]])    // 合并数组
   
```
```
方法的扩展
1. ES6提供了Array.of()方法，主要目的是弥补Array的不足
   let arr1 = Array(3);
   let arr = Array.of(3);
   console.log(arr)   // [ 3 ]  
   console.log(arr1)  //[  <3 empty items> ]  3位的空数组
   
2. ES6提供了 Array.from() 方法，将类似数组的对象或者遍历转换为真正的数组
   转换数组的要求比较严格：1. key必须是数值或者字符串  2. length设置长度， 而且key在范围内
   var obj = {
   	0: 'name',
   	1: 'age',
   	2: 'gender',
   	length: 3
   }
   
   console.log(Array.from(obj))  // [ 'name', 'age', 'gender' ]
  
3. ES6提供了	find() 和 findIndex() 方法，用于查找数组中第一个匹配的值
   // 参数是一个回调函数，可以使用箭头函数
   let arr = [10,20,30,40,50];
   console.log(arr.find(value => value === 20))  // 20
   console.log(arr.find(value => value > 20))  // 30
   console.log(arr.findIndex(value => value === 20))  // 1
   
4. ES6提供了 fill() 方法，可以填充重写数组中的元素值
   let arr = [1,2,3,4,5];
   console.log(arr.fill('a'))  // [ 'a', 'a', 'a', 'a', 'a' ]
   
   let arr = [1,2,3,4,5];
   console.log(arr.fill('a',1,3))  // [ 1, 'a', 'a', 4, 5 ]  从第2位开始到第4位结束 替换为 a  [1,3)
   
5. ES6提供了 copyWithin 方法, 从数组内部赋值, 然后粘贴到指定位置
   let arr = [1,2,3,4,5];
   // 从0开始复制  值从索引2开始粘贴  参数3设置结束粘贴索引值
   console.log(arr.copyWithin(2,0))  // [ 1, 2, 1, 2, 3 ]
   
```
### 对象的简写改进
```
1. ES6初始属性简写
   function fn(name , age){
   	return {name, age}
   }
   
   console.log(fn('Mr.z',10))
   
2. ES6 对象中方法的简写
   let obj = {
   	// ES6的写法
   	fn (){
   		return 'es6'
   	}
   }
   
   console.log(obj.fn())

```
```
表达式方案
1. ES6允许对象字面量，使用表达式进行属性名称的拼装操作
   let obj = {
   	['user' + 'name'] : "Mr.z"
   }
   
   console.log(obj.username)
   
2. ES6支持动态属性名称
   let myName = 'name';
   let obj = {
   	[myName] : "Mr.z"
   }
   console.log(obj[myName])
   console.log(obj.name)
   
3. ES6在对象字面量方法上，也支持拼装
   let obj = {
   	['f'+'n'](){
   		return 'es6'
   	}
   };
   console.log(obj.fn())
   
```
### 对象的新增方法
```
1. ES6中提供了 Object.is() 来处理 ===（恒等）中的一些缺点
   console.log(Object.is(NaN, NaN))   // true
   console.log(Object.is(+0, -0))  // false
   
2. ES6提供了 Object.assign() 方法可以合并指定对象至目标对象内部
   
3. ES6提供了 Object.getPrototypeOf() 和 Object.setPrototypeOf()方法
   var obj = {
   	fn(){
   		return 'fn'
   	}
   }
   
   let f = {};
   Object.setPrototypeOf(f,obj)  // 设置f的原型对象为 obj
   console.log(f.fn())
   console.log(Object.getPrototypeOf(f) === obj)   // 检测obj是否是f的原型对象
   
4. ES6提供了super关键字，用于原型方法中的继承功能
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
   
```
### Symbol类型和属性
```
Symbol类型
1. ES6新增了Symbol基础数据类型，表示独一无二的值，类似ID
   let str1 = Symbol();   // 不支持new Symbol
   let str2 = Symbol();
   console.log(str1 === str2)  // false
   
2. 在Symbol()中的参数，是对变量的描述，程序无法访问，只能日志打印
   let str1 = Symbol('字符串');
   console.log(str1)  // 输出: Symbol(字符串)
   
```
```
Symbol属性
1. 最常用的是作为对象属性
   let a = Symbol();
   let b = Symbol();
   
   let obj = {
   	[a]: 'name1',
   	[b]: 'name2'
   }
   console.log(obj)   // { [Symbol()]: 'name1', [Symbol()]: 'name2' }
   console.log(obj[a])  // name1
   
```
### Set数据集合
```
1.ES6新提供了Set集合, Set集合是一种无重复元素的列表 使用 new Set() 方法创建 Set 集合
   let arr = new Set();
   arr.add(1);
   arr.add(2);
   arr.add(2);
   arr.add('2');
   console.log(arr)  // Set { 1, 2, '2' }
   console.log(arr.length)  // undefined
   console.log(arr.size)  // 3
   
2. 使用 hash() 方法查找是否存在指定元素
   console.log(arr.has(2))  // true
   
3. 使用 delete() 删除指定元素， clear() 清空元素
   console.log(arr.delete(2))  // true
   console.log(arr)  // Set { 1, '2' }
   
   console.log(arr.clear())  // Set {}
   
4. 使用 ... 将 Set集合转换为数组
   console.log([...arr])
   
5. Set集合还提供了针对对象的Weak Set 集合，添加非对象类型会报错
6. Weak Set集合支持 add(), has(), delete() 方法
7. Weak Set不支持遍历, 内部隐藏(不支持查看), 不支持foreach和size
8. 对于应用场景来说, 存放对象的弱引用, 不用担心对象被回收后引发的问题
 
```
### Map数据集合
```
1. ES6提供了Map数据集合, 是一种以键值对存储的有序列表
   let map = new Map();
   map.set('name', 'Mr.z');
   map.set('age', 22);
   console.log(map);  // Map { 'name' => 'Mr.z', 'age' => 22 }
   console.log(map.get('name')) // Mr.z
   
2. 可以使用 has() 检测, delete() 删除, clear() 清空等对Map集合的操作

3. foreach遍历
   map.foreach((value, key, m) => {});
   
4. Map集合还提供了针对对象的Weak Map 集合，添加非对象类型会报错
5. Weak Map集合支持 set(), has(), delete() 方法
6. Weak Map不支持遍历, 内部隐藏(不支持查看), 不支持foreach和size
7. 对于应用场景来说, 存放对象的弱引用, 不用担心对象被回收后引发的问题

```
### 迭代器和生成器
```
迭代器
1. 迭代器(Tterator),用于给数据结构提供统一的访问遍历的机制
2. 生成器
   function *cit(){
   	yield 1;
   	yield 2;
   	yield 3;
   }
   
3. 迭代对象的 .next() 方法, 类似指针，每次执行将下移一行
   let it = cit();
   console.log(it.next());  // { value: 1, done: false }
   console.log(it.next());  // { value: 2, done: false }
   console.log(it.next());  // { value: 3, done: false }
   console.log(it.next()); // { value: undefined, done: true }
   
4. 生成器配合循环
   function *fn(arr){
   	for(let i=0; i<arr.length; i++){
   		yield arr[i];
   	}
   }
   
   let it = fn([1,2,3])
   console.log(it.next().value)  // 1
   console.log(it.next().value)  // 2
   console.log(it.next().value)  // 3
   
```
```
默认迭代接口
1. Array, Map, Set 等拥有默认迭代接口
2. 对于Array数组类型, 提供了 keys(), values(), entries()
   let arr = [1,2,3,4,5]
   console.log(arr.keys())  // Object [Array Iterator] {}
   console.log(arr.values())  // Object [Array Iterator] {}
   console.log(arr.entries())  // Object [Array Iterator] {}
   
3. for...of 迭代遍历
   let arr = [1,2,3,4,5]
   for(let i of arr.entries()){
   	console.log(i)
   }
   // [ 0, 1 ]
   // [ 1, 2 ]
   // [ 2, 3 ]
   // [ 3, 4 ]
   // [ 4, 5 ]
   
```
### 异步Promise
```
1. Promise: 异步通信编程的一种解决方案
   let p = new Promise((resolve, reject) => {
   	if(true){
   		resolve('执行成功')
   	}else{
   		reject('执行失败')
   	}
   });
   
   p.then((value) => {
   	console.log(value);
   }).catch((reason) => {
   	console.log(reason)
   });
   或
   p.then((value) =>{
   	console.log(value);
   },(reason) => {
   	console.log(reason)
   });
   
```
```
实例测试
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

p1.then((value) => {
	console.log(value);  // 调用p1
	return p2;
}).then((value) => {
	console.log(value);  // 调用p2
	return p3;
}).then((value) => {
	console.log(value)  // 调用p3
});
//1.异步
//2.异步
//3.异步

```
### Promise状态特点
```
1. Promise解决了异步多层回调混乱的问题
2. Promise对象异步操作的三种状态
   Pending(进行中)
   Fulfilled(已成功)
   Rejected(已失败)
3. 当异步操作执行后, 它得到的结果来决定其状态,其他任何操作都无法改变
4. Pending -> Fulfilled -> Resolve
   Pending -> Rejected -> Resolve
   
5. Promise提供了一个 all() 方法，可以简化多个实例调用的输出排序
   let p = Promise.all([p1,p2,p3]) // 参数为数组
   
   p.then((value) => {
   	console.log(value)  // [ '1.异步', '2.异步', '3.异步' ]
   });
   
6. Promise提供了 race() 方法, 只输出第一个改变状态的实例
   let p = Promise.race([p1,p2,p3])  // 参数为数组
   p.then((value) => {
   	console.log(value)  // 2.异步
   });
   
7. Promise提供了 resolve() 和 reject() 直接返回一个成功或者失败的案例
   let p1 = Promise.resolve('成功');
   let p2 = Promise.reject('失败')
   p1.then((value) => {
   	console.log(value)
   });
   p2.then((value) => {
   	console.log(value)
   });
   
```
### 代理Proxy
```
1. 什么是代理? 即 给目标对象封装一层拦截, 外界访问必须通过这层拦截
   let obj = {
   	name: 'Mr.z',
   	age: 22,
   	gender: '男'
   }
   
   let p = new Proxy(obj, {  //参数一 拦截的目标对象， 参数二 拦截行为
   	get(target, property){
   		// return 'fail';
   		if(property === 'age'){
   			return target[property];
   		}else{
   			return 'fail';
   		}
   	}
   });
   
   console.log(p.name)  // fail
   console.log(p.age)  // 22
   
2. 如果代理对象展示合适的值，可以通过 get() 的两个参数实现（可以进行验证与修改等）
   get(target, property){
   	if(property === 'age'){
   		return target[property] - 20;
   	}
   }
   
3. 也可以通过 set() 方法来对代理对象的属性进行赋值
   set(target, property, value){
   	if(property === 'age'){
   		target[property] = value;
   	}
   }
   
   p.age = 30;
   console.log(p.age);  // 30

```
```
小结
1. 代理并不是复制目标对象, 只是拦截目标对象, 更改默认行为
2. 代理可以使用 set() 和 get() 方法，对目标对象的数据进行过滤和验证
3. 代理对象中任何未公开或者不存在的属性, 可自定义返回内容
4. 代理可以阻止赋值的默认行为, 直接 return false

```
### 异步async
```
1. async也是处理异步的, 是对 Promise 的一种扩展, 让异步更加方便
2. 优势: async是基于Promise 的, 虽然是异步操作, 但看上去像同步
   let as = async() => {
   	let result = await p2;
   	console.log(result)
   };
   
   as();
  
3. 三个异步需要队列输出
   async function as(){
   	let r1 = await p1,
   	    r2 = await p2,
   	    r3 = await p3;
   		
   	console.log(r1);
   	console.log(r2);
   	console.log(r3);
   }
   
   as();
   // 1.异步
   // 2.异步
   // 3.异步
   
   对比 Promise, 没有then, 精简许多
   p1.then((value) => {
   	console.log(value);  // 调用p1
   	return p2;
   }).then((value) => {
   	console.log(value);  // 调用p2
   	return p3;
   }).then((value) => {
   	console.log(value)  // 调用p3
   });
   
4. await关键字只能在 async 函数内部, 否则不可识别
    
5. 批量异步队列, 类似Promise.all()
   async function as(){
   	let all = [await p1, await p2, await p3];
   	console.log(all)   // [ '1.异步', '2.异步', '3.异步' ]
   }
   
   as();
   
6. async如果设置了返回值, 这个值是 Promise 对象
   async function as(){
   	return 'async'
   }
   
   console.log(as())  // Promise { 'async' }
   
   // 可以通过then() 得到
   as().then((value) => {
   	console.log(value)   // async
   });
   
```
### 类class实现
```
1. 在ES6之前, javascript没有完整的类支持
2. ES6之前采用了原型链实现面向对象的功能, ES6开始, 提供了真正的类语法
3. 本质上内部实现和原型链还是一样的
   class Person {
   	// 构造函数（构造方法）
   	constructor(arg) {
   	    // this.arg是类的属性
   		// 参数赋值给属性
   	    this.arg = arg; 
   	}
   	
   	// 普通方法
   	run(){
   		return '输出:'+this.arg;
   	}
   }
   
   // 实例化一个Person对象
   let p = new Person('Mr.z');
   console.log(p.run());  // 输出:Mr.z 
   console.log(p.arg);  // Mr.z
   console.log(p instanceof Person);  // true
   console.log(typeof Person);  // function 说明 Person 本质上还是一个函数
 
```
```
getter和setter
1. 根据面向对象的三大定律中成员属性, 我们需要对它进行封装, 变成私有属性
2. 目前的 this.arg, 基本是对外公开的, 可以在类外取值和赋值
   class Person {
   	#arg   // 私有声明
   	// 构造函数（构造方法）
   	constructor(arg) {
   	    this.#arg = arg;  //私有属性, 类外无法访问
   	}
   	
   	// 普通方法
   	run(){
   		return '输出:'+this.arg;
   	}
   }
   
   // 实例化一个Person对象
   let p = new Person('Mr.z');
   console.log(p.run());   // 输出:undefined
   
3. 添加 getter setter 方法
   class Person {
   	#arg   // 私有声明
   	// 构造函数（构造方法）
   	constructor(arg) {
   	    this.#arg = arg;  //私有属性, 类外无法访问
   	}
   	
   	get arg(){
   		return this.#arg;
   	}
   	
   	set arg(value){
   		this.#arg = value;
   	}
   	
   	// 普通方法
   	run(){
   		return '输出:'+this.arg;
   	}
   }
   
   // 实例化一个Person对象
   let p = new Person('Mr.z');
   p.arg = 'Mr.x';
   console.log(p.arg);   // Mr.x
   
```
### 类class继承
```
1. ES6也支持子类继承父类, 使用 extends 关键字实现
2. 当子类继承父类, 实例化子类后, 就可以直接拥有父类的构造, 属性和方法
   class Person {
   	constructor(arg) {
   	    this.arg = arg; 
   	}
   	
   	run(){
   		return '输出:'+this.arg;
   	}
   }
   
   class Children extends Person{
   	
   }
   
   let c = new Children('Mr.hahaha');
   console.log(c.arg);   // Mr.hahaha
   console.log(c.run());  // 输出:Mr.hahaha
   
3. 继承之后, 一般来说，我们需要覆写父类, 然后对子类进行增强
   super 作为函数时, 调用父类构造, 作为对象时, 	在普通方法返回指定父类方法.    
   class Person {
   	constructor(arg) {
   	    this.arg = arg; 
   	}
   	
   	run(){
   		return '输出:'+this.arg;
   	}
   }
   
   class Children extends Person{
   	constructor(arg, age) {  // 覆写构造
   		super(arg);  // 执行父类构造并传参
   		this.age = age;
   	}
   	
   	run(){  //覆写方法
   		return super.run() + this.age;  // 执行父类方法并返回内容
   	}
   }
   
   let c = new Children('Mr.hahaha', 22);
   console.log(c.run());   // 输出:Mr.hahaha22
   
4. 可以使用 Object.getPrototypeOf() 判断子类是否继承了父类
   console.log(Object.getPrototypeOf(Children) === Person)  // true
   
5. ES6的类支持静态属性和方法, 也支持静态被子类继承（静态属性与方法可以直接调用, 不用实例化）
   class Person {
   	static gender = '男';
   
   }
   
   class Children extends Person{
   
   }
   
   console.log(Person.gender)  // 男
   console.log(Children.gender)  //男
   
   覆写静态
   class Person {
   	static gender = '男';
   
   }
   
   class Children extends Person{
   	static gender = '女';   // 覆写静态
   }
   
   console.log(Person.gender)  // 男
   console.log(Children.gender)  //女
   
```
### Moudle模块化
```
1. 浏览器加载, Node加载 
   区别: 导入 浏览器加载(import * as obj from '/...js')
             Node加载(commonJS规范, require（'/...js'）)  

```