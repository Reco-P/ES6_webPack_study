// webpack配置文件，每次执行会自动读取这里的配置
//_dirname当前目录路径
const path = require('path');

module.exports = {
	// 打包入口文件路径
	entry: './src/index.js',
	
	// 打包出口文件
	output:{
		//文件名
		filename: "bundle.js",
		// 路径,绝对路径
		path: path.resolve(__dirname, 'dist')
	},
	// test表示匹配的文件类型，user表示对应要调用的loader
	// rules: [
	// 	{ test: /\.css$/, use: ['style-loader','css-loader'] }
	// ]
};
