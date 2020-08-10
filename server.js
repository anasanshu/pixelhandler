var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname+'/dist/pixelhandler'));

app.all('*', (req, res) => {
    res.status(200).sendFile(__dirname+'/dist/pixelhandler/index.html');
});

app.listen(port, function(){
    console.log("App listeing on port: "+port);
});