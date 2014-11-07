var bio = {
	"name": "Swatcher Sandhya",
	"role": "Web Developer",
	"contactInfo": {
		"mobile": "000-000-0000", 
		"email":"email@gmail.com", 
		"github": "swatchophile", 
		"githubURL":"https://github.com/Swatchophile",
		"twitter":"@kachhua",
		"twitterURL":"http://twitter.com/kachhua",
		"blog":"name.wordpress.com",
		"blogURL":"http://swatchophile.wordpress.com",
		"location":"Sunnyvale"
	},
	"pictureURL": "images/image.jpg",
	"WelcomeMessage": "Hello world!",
	"skills": [
		"<span class='bold'>HTML5</span> - Canvas", 
		"<span class='bold'>CSS3</span> - Responsive layouts, Bootstrap, Foundation", 
		"<span class='bold'>JavaScript</span> - jQuery, AJAX, AngularJS", 
		"<span class='bold'>SEO</span> - SEM, email marketing"
	],
	"display":function(){
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);

		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
		$(".flex-box").append(formattedMobile);

		var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
		$(".flex-box").append(formattedEmail);

		var formattedGithub = (HTMLgithub.replace("%data%", bio.contactInfo.github)).replace("#", bio.contactInfo.githubURL);
		$(".flex-box").append(formattedGithub);

		var formattedTwitter = (HTMLtwitter.replace("%data%", bio.contactInfo.twitter)).replace("#", bio.contactInfo.twitterURL);
		$(".flex-box").append(formattedTwitter);

		var formattedBlog = (HTMLblog.replace("%data%", bio.contactInfo.blog)).replace("#", bio.contactInfo.blogURL);
		$(".flex-box").append(formattedBlog);

		var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
		$(".flex-box").append(formattedLocation);

		var formattedImage = HTMLbioPic.replace("%data%", bio.pictureURL);
		$("#header").append(formattedImage);

		var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMessage);
		$("#header").append(formattedWelcome);
		$("#header").append(HTMLskillsStart);
		
		for (skill in bio.skills) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkills);
		};
	}
};
bio.display();

var work = {
	"jobs":	[
		{
			"employer":"Self-employed",
			"employerURL":"http://knitaswatch.com/",
			"title":"Handknit Accessory Designer",
			"dates":"December 2013-present",
			"description":"Lorem ipsum dolor sit amet, laudem voluptatibus conclusionemque"+
				"eu nec, oratio soleat mandamus sit an. Stet appareat nominati cum an. Nec",
			"location":"Sunnyvale, California"
		},
		{
			"employer":"Indo-Global Social Service Society",
			"employerURL":"http://igsss.org/",
			"title":"Communications and Fundraising Executive",
			"dates":"June 2010 - June 2011",
			"description":"Lorem ipsum dolor sit amet, laudem voluptatibus conclusionemque"+
				"eu nec, oratio soleat mandamus sit an. Stet appareat nominati cum an. Nec",
			"location":"New Delhi, India"
		},
		{
			"employer":"Module One India Ltd",
			"employerURL":"http://www.moduleone.com/",
			"title":"Content Developer",
			"dates":"August 2008 - June 2010",
			"description":"Lorem ipsum dolor sit amet, laudem voluptatibus conclusionemque"+
				"eu nec, oratio soleat mandamus sit an. Stet appareat nominati cum an. Nec",
			"location":"New Delhi, India"
		}
	],
	"display":function() {
		for(job in work.jobs){
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = (HTMLworkEmployer.replace("%data%", work.jobs[job].employer)).replace("#",work.jobs[job].employerURL);

			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedWorkLocation);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		};
	}
};
work.display();

var projects = {
	"projects":	[
		{
			"dates":"October 2014",
			"title":"Mockup to Website",
			"titleURL":"http://knitaswatch.com/webdev/",
			"description":"Lorem ipsum dolor sit amet, laudem voluptatibus conclusionemque"+
				"eu nec, oratio soleat mandamus sit an. Stet appareat nominati cum an. Nec",
			"images":""
		},
		{
			"dates":"October 2014",
			"title":"Interactive Resume",
			"titleURL":"http://knitaswatch.com/webdev/resume.html",
			"description":"Lorem ipsum dolor sit amet, mandamus sit an. Stet appareat nominati cum an. Nec",
			"images":""
		},
		{
			"dates":"July 2014",
			"title":"Personal Website - knitaswatch.com",
			"titleURL":"http://knitaswatch.com",
			"description":"Lorem ipsum . Stet appareat nominati cum an. Nec",
			"images":""
		},
		{
			"dates":"June 2014",
			"title":"Knitting Calculator",
			"titleURL":"#",
			"description":"Lorem ipsum dolor sit amet, laudem voluptatibus conclusionemque"+
				"eu nec, oratio soleat mandamus sit an. Stet appareat nominati cum an. Nec",
			"images":""
		},
		{
			"dates":"June 2014",
			"title":"Wordpress Template",
			"titleURL":"#",
			"description":"Lorem ipsum dolor sit amet, laudem voluptatibus conclusionemque"+
				"eu nec. Stet appareat nominati cum an. Nec",
			"images":""
		}
	],
	"display":function() {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			
			var formattedTitle = (HTMLprojectTitle.replace("%data%", projects.projects[project].title)).replace("#",projects.projects[project].titleURL);
			$(".project-entry:last").append(formattedTitle);
			
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
		};
	}
};
projects.display();

var education = {
	"schools": [
		{
			"name":"University of Delhi",
			"nameURL":"http://www.du.ac.in/du/",
			"degree":"MA",
			"dates":"2006-2008",
			"location": "New Delhi, India",
			"major":"History"
		},
		{
			"name":"Lady Shri Ram College",
			"nameURL":"http://www.lsr.edu.in/",
			"degree":"BA(Hons)",
			"dates":"2001-2004",
			"location":"New Delhi, India",
			"major":"History"
		}
	],
	"onlineCourses": [
		{
			"title":"Front-End Developer Nanodegree",
			"classURL":"https://www.udacity.com/course/nd001",
			"school":"Udacity",
			"dates":"October 2014 - present",
			"url":"udacity.com",
			"siteURL":"https://www.udacity.com/"
		},
		{
			"title":"JavaScript Essential Training",
			"classURL":"http://www.lynda.com/JavaScript-tutorials/JavaScript-Essential-Training/81266-2.html",
			"school":"Lynda",
			"dates":"June 2014",
			"url":"lynda.com",
			"siteURL":"http://www.lynda.com/"
		},
		{
			"title":"Computer Science 101",
			"classURL":"https://www.coursera.org/course/cs101",
			"school":"Coursera",
			"dates":"2012",
			"url":"coursera.org",
			"siteURL":"https://www.coursera.org/"
		}
	],
	"display":function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			
			var formattedName = (HTMLschoolName.replace("%data%", education.schools[school].name)).replace("#", education.schools[school].nameURL);
			$(".education-entry:last").append(formattedName);
			
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedDegree);
			
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedMajor);
		};
		$(".education-entry:last").append(HTMLonlineClasses);
		
		for (course in education.onlineCourses) {
			
			var formattedTitle = (HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title)).replace("#",education.onlineCourses[course].classURL);
			$(".education-entry:last").append(formattedTitle);
			
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			$(".education-entry:last").append(formattedSchool);
			
			var formattedOnDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedOnDates);
			
			var formattedURL = (HTMLonlineURL.replace("%data%", education.onlineCourses[course].url)).replace("#",education.onlineCourses[course].siteURL);
			$(".education-entry:last").append(formattedURL);	
		};
	}
};
education.display();

//navigation object added
var navigation = {
	"mainMenu": [
		{
			"name":"Home",
			"link":"#"
		},
		{
			"name":"Work",
			"link":"#workL"
		},
		{
			"name":"Projects",
			"link":"#projectsL"
		},
		{
			"name":"Education",
			"link":"#educationL"
		}, 
		{
			"name":"Map",
			"link":"#mapL"
		}
	],
	"display":function() {
		for(i in navigation.mainMenu){
			var formattedNavItem = (HTMLnavItem.replace("%data%", navigation.mainMenu[i].name)).replace("#",navigation.mainMenu[i].link);
			$("#mainMenu").append(formattedNavItem);
		};
	}
};
navigation.display();

$(document).click(function(loc) {
	var x = loc.pageX;     // Get the horizontal coordinate
	var y = loc.pageY;     // Get the vertical coordinate
	logClicks(x,y);
});
	
function locationizer(work_obj) {
	var locationArray = [];
	for(job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
}

function inName() {
	var name1 = bio.name.trim().split(" ");
	name1[0] = name1[0].slice(0,1).toUpperCase() + name1[0].slice(1).toLowerCase();
	name1[1] = name1[1].toUpperCase();
	return name1[0] + " " + name1[1];
};
$("#container").append(internationalizeButton);
$("#mapDiv").append(googleMap);	

var chart = "<div class='chart'></div>";
$("header").append(chart)
	.append("<div>");

function prepareMenu() {
	 var navHover = document.getElementById("menu");
	 var subNav1 = document.getElementById("mainMenu");
	 var subNav2 = document.getElementById("changeStyle");
	 navHover.onmouseover = function() {
		subNav1.style.visibility = "visible";
		subNav1.style.display = "block";
	};
	 navHover.onmouseout = function() {
		subNav1.style.visibility = "hidden";
	};
};
prepareMenu();
