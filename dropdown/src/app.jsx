var React = require('react');
var ReactDOM = require('react-dom');
var Dropdown = require('./dropdown');

//Main options for the app. Kept in one location for easy access
var options = {
	title: 'Choose a dessert',
	items: [
		'Apple Pie',
		'Peach Cobbler',
		'Coconut Cream Pie'
	]
};

//Creating an instance of the Class (Cookie)
var element = React.createElement(Dropdown, options);

//Displaying the instance (Eating the cookie?!)
ReactDOM.render(element, document.querySelector('.container'));
