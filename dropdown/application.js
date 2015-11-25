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
// Creating the Class (Cookie Cutter)
var Badge = React.createClass({displayName: "Badge",
	render: function () {
		return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
    		this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
  		)
	}
});
//List of Thumbnail objects
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
	render: function() {
		var list = this.props.thumbnailData.map(function(thumbnailProps){
			return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
		});
		return React.createElement("div", null, 
			list
		)
	}
})
//Thumbnail template for each list item
var Thumbnail = React.createClass ({displayName: "Thumbnail",
	render: function () {
		return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
			React.createElement("div", {className: "thumbnail"}, 
		      	React.createElement("img", {src: this.props.imageUrl}), 
		      	React.createElement("div", {className: "caption"}, 
		        	React.createElement("h3", null, this.props.header), 
		        	React.createElement("p", null, this.props.description), 
		        	React.createElement("p", null, 
		        		React.createElement(Badge, {title: this.props.title, number: this.props.number})
		        	)
		      	)
	    	)
	    )
	}	
})