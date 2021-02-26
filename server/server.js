"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
// Create a new express app instance
var app = express();
var port = 3000;
/**
 * GET METHOD
 */
app.get('/', function (req, res) {
    res.send('Hello World! <br/> <b>Bold text</b>');
});
app.get('/middleware', function (req, res, next) {
    console.log('Middleware!');
    next();
}, function (req, res) {
    res.send('Hello world! after middleware');
});
var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
};
var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
};
var cb2 = function (req, res) {
    res.send('Hello from C!');
};
app.get('/example/c', [cb0, cb1, cb2]);
/**
 * POST METHOD
 */
app.post('/', function (req, res) {
    res.send('Got a POST request');
});
/**
 * PUT METHOD
 */
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});
/**
 * DELETE METHOD
 */
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});
/**
 * Static files serving
 */
app.use('/static', express.static(path.join(__dirname, 'public')));
app.listen(port, function () {
    console.log("App is listening at http://localhost:" + port + "!");
});
