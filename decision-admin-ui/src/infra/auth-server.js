// This is a Node.js Express Server that can be used to serve the frontend pages
// It is used by our Continuous Deployment,
// It is using whisper to authenticate approved emails against Persona directory.
// More details here:
// https://elements.heroku.com/addons/wwwhisper
// https://wwwhisper.herokuapp.com/welcome/
// https://decision-modeling.herokuapp.com/wwwhisper/admin/

var express = require('express');
var logfmt = require('logfmt');
var wwwhisper = require('connect-wwwhisper');
var app = express();

app.use(logfmt.requestLogger());
app.use(wwwhisper());

// Assuming server starts from decision-modeling-parent root
app.use(express.static('./decision-admin-ui/'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log('Listening on ' + port);
});