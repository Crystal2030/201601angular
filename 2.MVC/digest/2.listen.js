function Scope(){
	this.$$watchers = [];//观察者数组
}

//当scope上expr变化的时候执行回调监听
Scope.prototype.$watch = function(expr, listener){
	var watcher = {
		expr: expr,
		fn: listener,
		last: undefined
	};
	this.$$watchers.push(watcher);

}
Scope.prototype.$digest = function(){
	var dirty;
	var count = 10;
	do{
		dirty = this.$digestOnce();
		if(dirty && count==0){
			throw Error("10 $digest() iterations reached. Aborting!")
		}
	}while(dirty && count--)
}
Scope.prototype.$digestOnce = function(expr, listener){
	var self = this;
	var dirty = false;//是否有脏数据，本次循环当中看看是否有变化的值

	this.$$watchers.forEach(function(watcher){
		var newVal = self[watcher.expr];
		var oldVal = watcher.last;
		if(newVal != oldVal){
			watcher.fn(newVal, oldVal);
			watcher.last = newVal;
			dirty = true;//已将脏了
		}
	})
	return dirty;
};
Scope.prototype.$apply = function(){
	this.$digest();
}
var scope = new Scope();
scope.one = 0;
scope.two = 0;
scope.$watch('one', function(newVal, oldVal){
	scope.two = Math.random();
	console.log(scope.two)
})
scope.$watch('two', function(newVal, oldVal){
	scope.three = newVal;
	scope.one = Math.random();
	console.log(scope.one)

})
scope.one = 1;
scope.$apply();