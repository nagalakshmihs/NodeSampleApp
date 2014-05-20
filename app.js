var express = require('express');
var app = express();

app.get('/', function(req, res)
{
	res.send("Hellow world");
});
app.get('/me', function(req, res)
{
	res.send("@planetofweb");
});

app.get('/who/:name', function(req, res)
{
var name = req.params.name;
	res.send(name);
});


var server = app.listen(3000, function(){
	console.log("listening to 3000");
});