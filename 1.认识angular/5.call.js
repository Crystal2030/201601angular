/**
 * call方法作用：
 * 1.修改函数中this指针
 * 2.让函数执行
 *
 * 待完成
 */
function call(self){

}
var obj = {name: 'angular'};
function say(){
    console.log(this.name);
}
// say();//undefined   this=window
// say.call(obj);//angular  this=obj

Function.prototype.call()

Function.prototype.mycall = function(thisObj){
    var source = this.toString();
    console.log(source)
    source = source.replace(/this/, function(result){
        return 'arguments[0]';
    })
    eval('('+ source + ')(thisObj)');
}

say.mycall(obj);//angular