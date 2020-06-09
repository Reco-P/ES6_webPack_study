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