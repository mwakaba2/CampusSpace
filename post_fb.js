var Firebase = require('firebase');
var usersRef = new Firebase('https://campusspace.firebaseio.com/');
// usersRef now refers to the 'users' database location
// var fs = require('fs');
// var obj = JSON.parse(fs.readFileSync('./dummpy_data.json', 'utf8'));
// var obj = require('./dummpy.json');

var obj = require('./data/json-data');
console.log('Require:', obj);

usersRef.set(
	obj
);
console.log('Posted:');