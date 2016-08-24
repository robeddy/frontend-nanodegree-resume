var bio = {
    "name": "Erlich Bachman",
    "role": "Chief Evangelism Officer",
    "contacts": {
        "mobile": "212-555-1212",
        "email": "bachmania@aviato.com",
        "github": "aviato_bachman",
        "twitter": "erlichbachman",
        "location": "Palo Alto, CA"
    },
    "welcomeMessage":"I memorized the hexadecimal times tables when I was 14 writing machine code, okay? Ask me what 9 times F is. It's fleventyfive.",
    "skills": [
        "Entrepreneur","Angel Investor","Incubator Owner","Founder","Chairman"
    ],
    "bioPic": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/6/005/05a/24b/00dd9b4.jpg" //,
    //ADD DISPLAY FUNCTION HERE, CURRENTLY BROKEN

}

var education = {
    "schools": [
        {
            "name": "second school",
            "location": "ft lauderdale, fl",
            "degree": "masters",
            "majors": ["CS"],
            "dates": 2013,
            "url": "http://secondschool.com"
        },
        {
            "name": "first school",
            "location": "san francisco, ca",
            "degree": "ba",
            "majors": ["BS"],
            "dates": 2010,
            "url": "http://firstschool.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "second school",
            "school": "ft lauderdale, fl",
            "dates": "masters",
            "url": "http://udacity.com"
        }
    ]    //,
    //ADD DISPLAY FUNCTION
}


var work = {
    "jobs": [
    {
        "employer": "employer1",
        "title": "title1",
        "location": "loc1",
        "dates": "1998 - 1999",
        "description": "description 1"
    },
    {
        "employer": "employer2",
        "title": "title2",
        "location": "loc2",
        "dates": "2001 - 2002",
        "description": "description 2"
    }
    ]//,
    //ADD DISPLAY FUNCTION
}


var projects = {
    "projects": [
    {
        "title": "project title 1",
        "dates": "2014",
        "description": "description project title 1",
        "images": ["http://placekitten.com/200/300",
                   "http://placekitten.com/400/300"
                  ]
    },
    {
        "title": "project title 2",
        "dates": "2015",
        "description": "description project title 2",
        "images": ["http://placekitten.com/600/100",
                   "http://placekitten.com/200/200"
                  ]
    }
    ]//,
    //ADD DISPLAY FUNCTION
}


var bioName = HTMLheaderName.replace("%data%", bio.name);


for(key in bio.contacts) {
    console.log(key + '...' + bio.contacts[key]);
    $("#topContacts").append(HTMLcontactGeneric.replace("%contact%", key).replace("%data%", bio.contacts[key]));
};

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(bioName);

$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));

$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

$("#header").append(HTMLskillsStart);

bio.skills.forEach(function(entry) {
    console.log(entry);
    $("#header").append(HTMLskills.replace("%data%", entry));
});



/*
if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

}
*/
function displayWork() {
    for (job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();


$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});


projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectTitle.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectTitle.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
/*
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMprojectImage.replace("%data%",projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
*/
    }
}

projects.display();