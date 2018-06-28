var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    port = 3200;

const serverless = require('serverless-http');

app.use('/static', express.static('public'));

app.get('/', function (req, res) {
    res.send("Servidor de encapsulación");
})

server.listen(port, function () {
    console.log("Listening " + ":" + port);
});

module.exports.handler = serverless(app);





