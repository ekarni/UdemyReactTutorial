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