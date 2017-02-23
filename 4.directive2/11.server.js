var http = require('http');
var fs = require('fs');
var users =  ['admin','auth'];
http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Contrl-Allow-Headers', 'Content-Type');
    if(req.url == '/user/check'){
        console.log(111)

        var str = '';
        req.setEncoding('utf8');
        req.on('data', function(data){
            str += data;
        });
        req.on('end', function(data){
            var contentType = req.headers['content-type'];
            console.log(contentType, str)
            if(contentType == 'application/json'){
                var json = JSON.parse(str);
                var username = json.username;
                res.end(JSON.stringify({unique: users.indexOf(username) == -1}));

            }else{
                console.log(222)
                res.end('404');
            }
         })
    }else{
        console.log(333)
        res.end('404');
    }
}).listen(8080, function(){
    console.log('server is running on 8080')
});