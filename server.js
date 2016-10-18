var express = require('express');
var app = express();

var dd_options = {
    'response_code':true,
    'tags': ['app:my_app']
};

var connect_datadog = require('connect-datadog')(dd_options);

app.use(connect_datadog);

app.get('/', function (req, res) {
    var i, j;
    var len = req.query.n;
    var arr = [];
    try {
        for (i = 0; i < len; i++) {
            arr.push(Math.random() * 100 ^ 0)
        }
        var n = arr.length;
        for (i = 0; i < n - 1; i++) {
            for (j = 0; j < n - 1 - i; j++) {
                if (arr[j + 1] < arr[j]) {
                    var t = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = t;
                }
            }
        }
    } catch (e) {
        arr = e;
    }
    res.status(200);
    res.send('ok. Random number ' + (Math.random() * 100 ^ 0) + ' \n' + JSON.stringify(arr));
});

app.listen(80, function () {
    console.log('Example app listening on port 80!');
});
