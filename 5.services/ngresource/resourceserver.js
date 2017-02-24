var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(__dirname));
app.use(require('body-parser').json());

app.get('/', function(req, res){
    res.sendFile(path.resolve('ngresource.html'))
});
var books = [{id:1, name:'node.js'}];

app.get('/', function(req, res){
    res.sendFile(path.resolve('ngresource.html'));
});

var books = [{id:1, name: 'node.js'}];

//当用户请求/books路径时
app.route('/books').get(function(req, res){
    res.send(books);
}).post((req, res) => {
    //如何接收客户端传过来的post请求体
    var book = req.body;
    book.id = books[books.length-1].id+1;
    books.push(book);
    res.send(book);

})

app.route('/books/:id').delete((req, res) => {
    books = books.filter(function(book){
        return book.id !=req.params.id;
    })
    //restful规范，删除一个对象后返回一个空对象
    res.send({});
}).put((req, res) => {
    books.map(item => {
        if(item.id == req.params.id){
            return req.book;
        }else{
            return item;
        }
    })
    res.send(req.body);
});

app.listen(8080);


