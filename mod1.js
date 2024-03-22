var http = require('http');
var url = require('url');


http.createServer(function(req,res) {
    res.writeHead(200,{'content-Type' : 'text/html'});
    var q = url.parse(req.url,true).query;
    var txt = "How are you:  "+q.firstname + " " + q.lastname;
    res.end(txt);
    console.log(txt);
});
app.listen(5000);

