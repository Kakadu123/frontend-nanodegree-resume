bio = {
	
	"name" : "Samuel Gaspar",
	"role" : "web developer",
	"contacts" : {
		"mobile": "0907 939 857",
		"email": "fake@fake.com",
		"github": "https://github.com/Kakadu123",
		"twitter": "@myfaketwitter",
		"location": "Bratislava, Slovakia"
	}, 
	"welcomeMessage": "Hey, whats up!", 
	"skills": ["hardworking", "proactive", "talkative", "innovative"],
	"biopic": "images/Samuel_photo.png",
	"display": function () {
	
		$("#header").prepend(HTMLheaderRole.replace( "%data%" , bio.role ))
					.prepend(HTMLheaderName.replace( "%data%" , bio.name ))
					.append(HTMLbioPic.replace( "%data%" , bio.biopic ))
					.append(HTMLWelcomeMsg.replace( "%data%" , bio.welcomeMessage ))
					.append(HTMLskillsStart);
					
		for (var skill in bio.skills) {
			$("#header").append(HTMLskills.replace( "%data%" , bio.skills[skill] ));
		}			
		
		$("#topContacts, #footerContacts").append(HTMLmobile.replace( "%data%" , bio.contacts.mobile ))
						 .append(HTMLemail.replace( "%data%" , bio.contacts.email))
						 .append(HTMLgithub.replace( "%data%" , bio.contacts.github))
						 .append(HTMLtwitter.replace( "%data%" , bio.contacts.twitter ))
						 .append(HTMLlocation.replace( "%data%" , bio.contacts.location ));
	} 
}
		
education = {
	"schools" : [
		{
			"name" : "Elementary school",
			"location" : "Kezmarok, Slovakia",
			"degree": "N/A",
			"majors": [ "N/A" ],
			"dates": 2001,
			"url": "http://zsfiskk.edupage.sk/"
		}
		,
		{
			"name" : "Faculty of Law",
			"location" : "Bratislava, Slovakia",
			"degree": "master",
			"majors": [ "law" ],
			"dates": 2009,
			"url": "http://www.flaw.uniba.sk/index.php?id=1"
		},
		{
			"name" : "Faculty of Mathematics",
			"location" : "Bratislava, Slovakia",
			"degree": "bachelor (unfinished)",
			"majors": [ "financial mathematics" ],
			"dates": 2008,
			"url": "http://www.fmph.uniba.sk/"
		} 		
	],
	"onlineCourses": [
		{
			"title": "Front-End Developer",
		    "school": "Udacity",
			"date": 2015,
	        "url": "https://www.udacity.com/"			
		},		
		{
			"title": "JQuery introduction",
		    "school": "Lynda.com",
			"date": 2014,
	        "url": "http://www.lynda.com"			
		}
	],
	"display": function() {
	  
	  for (var school in education.schools) {
	  	
	  		 $("#education").append(HTMLschoolStart);
	  		 $(".education-entry:last").append(
											  HTMLschoolName.replace( "%data%" , education.schools[school].name ) + 
											  HTMLschoolDegree.replace( "%data%" , education.schools[school].degree ))
									  .append(HTMLschoolDates.replace( "%data%" , education.schools[school].dates ))
									  .append(HTMLschoolLocation.replace( "%data%" , education.schools[school].location ))
									  .append(HTMLschoolMajor.replace( "%data%" , education.schools[school].majors[0] ));
		}
		
	 $("#education").append(HTMLonlineClasses);
	  for (var course in education.onlineCourses) {
	  		 $("#education").append(HTMLschoolStart);
	  		 $(".education-entry:last").append(
							  		 			HTMLonlineTitle.replace( "%data%" , education.onlineCourses[course].title ) + 
							  		 			HTMLonlineSchool.replace( "%data%" , education.onlineCourses[course].school ))
										.append(HTMLonlineDates.replace( "%data%" , education.onlineCourses[course].date ))
										.append(HTMLonlineURL.replace( "%data%" , education.onlineCourses[course].url ));								  
		}		  
	}	
}


work = {
	"jobs" : [
		{
		"employer" : "AT&T",
		"title" : "web developer",
		"location" : "Bratislava, Slovakia",
		"dates" : "2010 - now",
		"description": "I am doing development of internal corporate tools."
		},
		{
		"employer" : "Salans",
		"title" : "legal clerk",
		"location" : "Bratislava, Slovakia",
		"dates" : "2007 - 2009",
		"description": "I was doing legal analysis, translation and communication with state auhorities."	
		},
		{
		"employer" : "Forno Vivo",
		"title" : "kitchen porter",
		"location" : "Tring, UK",
		"dates" : "Jun 2005 - Sept 2005",
		"description": "doing washing-up, cleaning and other minor works."	
		}
	  ],
	 "display" : function() {
		
		  for (var job in work.jobs) {
		  		 $("#workExperience").append(HTMLworkStart);
		  		 $(".work-entry:last").append(
							  		 			HTMLworkEmployer.replace( "%data%" , work.jobs[job].employer) + 
							  		 			HTMLworkTitle.replace( "%data%" , work.jobs[job].title ))
									  .append(HTMLworkLocation.replace( "%data%" , work.jobs[job].location ))
									  .append(HTMLworkDates.replace( "%data%" , work.jobs[job].dates ))
									  .append(HTMLworkDescription.replace( "%data%" , work.jobs[job].description ));
			}
		}
	}	
			
project = {
	"projects" : [
		{
		"title" : "Udacity Mockup to Website",		
		"dates" : "February 14th, 2015",		
		"description" : "I was provided with a design mockup as a PDF-file and must have replicated that design in HTML and CSS. It was developed in a responsive website that displays images, descriptions and links to each of the portfolio projects.",					
		"images" : [
			"images/Proj1_01.png"		
		]
		},
		{
		"title" : "Udacity Interactive Resume",		
		"dates" : "February 20th 2015",		
		"description" : "I demonstrated mastery of the language's syntax through a series of challenges. Each multipart problem mimics a real-life challenge that front-end developers face. I was required to write clean code and to apply your knowledge of variables, objects, JSON, functions and control flow to successfully solve the challenges.",					
		"images" : [
			"images/Proj2_01.png",
			"images/Proj2_02.png"		
		]
		}
	],
	"display": function() {
		  
		  for (var item in project.projects) {
		  		 $("#projects").append(HTMLprojectStart);
		  		 $(".project-entry:last").append(HTMLprojectTitle.replace( "%data%" , project.projects[item].title))
			    						  .append(HTMLprojectDates.replace( "%data%" , project.projects[item].dates ))
				    					  .append(HTMLprojectDescription.replace( "%data%" , project.projects[item].description ));
			
					for (var pic = 0; pic <  project.projects[item].images.length; pic++) {
						$(".project-entry:last").append(HTMLprojectImage.replace( "%data%" , project.projects[item].images[pic] ));
					}						  										  
			}	
	}
}
	
// calling of methods
bio.display();
education.display();
work.display();	
project.display();	

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
	
	
