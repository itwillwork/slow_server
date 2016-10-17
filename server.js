var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var i, j;
    var len = req.query.n;
    var arr = [];
    for (i = 0; i < len; i++) {
        arr.push(Math.random() * 100 ^ 0)
    }
    var n = arr.length;
    for (i = 0; i < n-1; i++) {
        for (j = 0; j < n-1-i; j++) {
            if (arr[j+1] < arr[j]) {
                var t = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = t;
            }
        }
    }
    res.status(200);
    res.send('ok. Random number ' + (Math.random() * 100 ^ 0) + ' \n' + JSON.stringify(arr));
});

app.listen(80, function () {
    console.log('Example app listening on port 80!');
});