var bio = {
    "name": "rob",
    "role": "maester",
    "contacts": {
        "mobile": "212-555-1212",
        "email": "email addr",
        "github": "github acct",
        "twitter": "tweeter",
        "location": "loc"
    },
    "welcomeMessage":"w e l c o m e     M e s s a g e.",
    "skills": [
        "s1","s2","s3","s4","s5"
    ],
    "bioPic": "images/pic.jpg"
}

var education = {
    "schools": [
        {
            "name": "second school",
            "city": "ft lauderdale, fl",
            "degree": "masters",
            "majors": ["CS"],
            "dates": 2013,
            "url": "http://secondschool.com"
        },
        {
            "name": "first school",
            "city": "san francisco, ca",
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
    ]
}


var work = {
    "jobs": [
    {
        "employer": "employer1",
        "title": "title1",
        "dates": "1998 - 1999",
        "description": "description 1"
    },
    {
        "employer": "employer2",
        "title": "title2",
        "dates": "2001 - 2002",
        "description": "description 2"
    }
    ]
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
    ]
}


var bioName = HTMLheaderName.replace("%data%", bio.name);

$("#header").append(bioName);

if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

}

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