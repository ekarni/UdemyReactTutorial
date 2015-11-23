(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\ekarni\\Documents\\GitHub\\UdemyReactTutorial\\thumbnail-gulp\\src\\app.jsx":[function(require,module,exports){
//Main options for the app. Kept in one location for easy access
var options = {
	thumbnailData: [{
		title: 'Show Courses',
		number: 32,
		header: 'Learn React',
		description: 'React is a fantastic new library for making fast, dynamic pages.',
		imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
	},{
		title: 'Show Courses',
		number: 25,
		header: 'Learn Gulp',
		description: 'Gulp will speed up your development worflow a lot. Gulp will speed up your development worflow a lot.',
		imageUrl: 'http://brunch.io/images/others/gulp.png'
	}]
};

//Creating an instance of the Class (Cookie)
var element = React.createElement(ThumbnailList, options);

//Displaying the instance (Eating the cookie?!)
React.render(element, document.querySelector('.container'));

},{}]},{},["C:\\Users\\ekarni\\Documents\\GitHub\\UdemyReactTutorial\\thumbnail-gulp\\src\\app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOlxcVXNlcnNcXGVrYXJuaVxcRG9jdW1lbnRzXFxHaXRIdWJcXFVkZW15UmVhY3RUdXRvcmlhbFxcdGh1bWJuYWlsLWd1bHBcXHNyY1xcYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLGdFQUFnRTtBQUNoRSxJQUFJLE9BQU8sR0FBRztDQUNiLGFBQWEsRUFBRSxDQUFDO0VBQ2YsS0FBSyxFQUFFLGNBQWM7RUFDckIsTUFBTSxFQUFFLEVBQUU7RUFDVixNQUFNLEVBQUUsYUFBYTtFQUNyQixXQUFXLEVBQUUsa0VBQWtFO0VBQy9FLFFBQVEsRUFBRSx1RkFBdUY7RUFDakcsQ0FBQztFQUNELEtBQUssRUFBRSxjQUFjO0VBQ3JCLE1BQU0sRUFBRSxFQUFFO0VBQ1YsTUFBTSxFQUFFLFlBQVk7RUFDcEIsV0FBVyxFQUFFLHVHQUF1RztFQUNwSCxRQUFRLEVBQUUseUNBQXlDO0VBQ25ELENBQUM7QUFDSCxDQUFDLENBQUM7O0FBRUYsNENBQTRDO0FBQzVDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztBQUUxRCwrQ0FBK0M7QUFDL0MsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvL01haW4gb3B0aW9ucyBmb3IgdGhlIGFwcC4gS2VwdCBpbiBvbmUgbG9jYXRpb24gZm9yIGVhc3kgYWNjZXNzXHJcbnZhciBvcHRpb25zID0ge1xyXG5cdHRodW1ibmFpbERhdGE6IFt7XHJcblx0XHR0aXRsZTogJ1Nob3cgQ291cnNlcycsXHJcblx0XHRudW1iZXI6IDMyLFxyXG5cdFx0aGVhZGVyOiAnTGVhcm4gUmVhY3QnLFxyXG5cdFx0ZGVzY3JpcHRpb246ICdSZWFjdCBpcyBhIGZhbnRhc3RpYyBuZXcgbGlicmFyeSBmb3IgbWFraW5nIGZhc3QsIGR5bmFtaWMgcGFnZXMuJyxcclxuXHRcdGltYWdlVXJsOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3dpa2kvZmFjZWJvb2svcmVhY3QvcmVhY3QtbG9nby0xMDAwLXRyYW5zcGFyZW50LnBuZydcclxuXHR9LHtcclxuXHRcdHRpdGxlOiAnU2hvdyBDb3Vyc2VzJyxcclxuXHRcdG51bWJlcjogMjUsXHJcblx0XHRoZWFkZXI6ICdMZWFybiBHdWxwJyxcclxuXHRcdGRlc2NyaXB0aW9uOiAnR3VscCB3aWxsIHNwZWVkIHVwIHlvdXIgZGV2ZWxvcG1lbnQgd29yZmxvdyBhIGxvdC4gR3VscCB3aWxsIHNwZWVkIHVwIHlvdXIgZGV2ZWxvcG1lbnQgd29yZmxvdyBhIGxvdC4nLFxyXG5cdFx0aW1hZ2VVcmw6ICdodHRwOi8vYnJ1bmNoLmlvL2ltYWdlcy9vdGhlcnMvZ3VscC5wbmcnXHJcblx0fV1cclxufTtcclxuXHJcbi8vQ3JlYXRpbmcgYW4gaW5zdGFuY2Ugb2YgdGhlIENsYXNzIChDb29raWUpXHJcbnZhciBlbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChUaHVtYm5haWxMaXN0LCBvcHRpb25zKTtcclxuXHJcbi8vRGlzcGxheWluZyB0aGUgaW5zdGFuY2UgKEVhdGluZyB0aGUgY29va2llPyEpXHJcblJlYWN0LnJlbmRlcihlbGVtZW50LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykpOyJdfQ==
