//定义私有变量
let a = 'abc'
let b = '123'
function show(){}

//默认导出  唯一
export default{
	a,
	show
}

//按需导出  可以多个
export let c = 1