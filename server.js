var express = require('express');
var app = express();

var bcrypt = require('bcrypt');

var dd_options = {
    'response_code':true,
    'tags': ['app:my_app']
};
var connect_datadog = require('connect-datadog')(dd_options);
app.use(connect_datadog);

app.get('/', function (req, res) {
    var iterate = req.query.n || 1;
    var salt = bcrypt.genSaltSync(10);
    var hash = "my password lol";
    var i;

    for (i = 0; i < iterate; i++) {
        hash = bcrypt.hashSync(hash, salt);
    }

    res.status(200);
    res.send('ok. Random number \n' + hash);
});

app.listen(80, function () {
    console.log('Example app listening on port 80!');
});
