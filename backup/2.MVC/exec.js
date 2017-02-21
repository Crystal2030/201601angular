function one(){
	var first='first';
	function two(){
		var second='second';
	}
	two();
}
one();
/**
 * 1.当js脚本运行的时候会产生一个全局上下文环境：
 *      this = window
 *      全局属性 Math Reg Array
 *      预解释上来的函数定义 var 变量
 * 2.当进入一个函数的时候，会产生一个函数集的执行上下文环境
 *      this
 *      激活对象/值对象： var 变量 function定义
 *      参数
 *
 */