/**
 *
 * @param 依赖注入：
 * 函数里声明一个依赖，我们容器把需要依赖的东西实例化，传到参数中，让你的参数得以执行
 */
//这是要执行的函数
var greet = function(words){
    console.log(words.text);
};

var registry = {
    words: {
        text: 'hello'
    }
    /*,
    school: {
        text: 'zfpx'
    }*/
}

var inject = function(func){
    var source = func.toString();
    var matchers = source.match(/function\s?\((\w+)\)/)
    console.log(source,matchers);
    var argnames = matchers.slice(1)
    console.log(argnames)
    var args = [];
    for(var i = 0;i<argnames.length; i++)
    {
        var argObj = registry[argnames[i]];
        args.push(argObj);
    }
    func.apply(null,args)
}
//自动注入服务对象并且运行参数里面的函数
inject(greet);