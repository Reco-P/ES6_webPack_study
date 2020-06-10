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
   	console.log(number);
   	console.log(age);
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
2. 对于超过两个字符的马甸，可以通过ES6新增的 String.fromCodePoint() 
  console.log(String.fromCodePoint(134071));
   
3. ES6提供的 normalize() 方法用于有音标的符号组合形成统一
4. ES6提供了三种判断字符串的方法 includes(), startWith(), endsWith(),若找到返回true
   console.log('abc'.includes('a'))   // true
   console.log('abc'.startsWith('a'))  // true
   console.log('abc'.endsWith('c'))  // true
   
5. repeat() 重复字符串， padStart() 补全字符串头部, endStart() 补全字符串尾部
   console.log('x'.repeat(2))
   console.log('x'.padStart(2,'0'))   // 前补0，补全后一共两位
   console.log('x'.padEnd(2,'0'))  // 尾补0，补全后一共两位

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