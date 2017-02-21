function Scope(){

}

//1.注册监听
Scope.prototype.$watch = function(expr, listener){

}
var scope = new Scope();
scope.name = 'scope';

console.log(scope);