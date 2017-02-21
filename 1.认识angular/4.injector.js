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