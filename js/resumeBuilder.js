var bio = {
    "name": "Erlich Bachman",
    "role": "Chief Evangelism Officer",
    "contacts": {
        "mobile": "650-GOAVIATO",
        "email": "bachmanity@aviato.com",
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
            "name": "University of Wisconsin",
            "location": "Madison, WI",
            "degree": "Masters",
            "majors": ["Life"],
            "dates": 2013,
            "url": "http://wisconsin.edu"
        },
        {
            "name": "'Oxford'",
            "location": "Oxford, MS",
            "degree": "Bachelor of Arts",
            "majors": ["Practical Life"],
            "dates": 2010,
            "url": "http://olemiss.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript",
            "school": "Udacity",
            "dates": 2016,
            "url": "http://udacity.com"
        }
    ],
    display: function() {
        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name).replace("#",education.schools[school].url);

            var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);

            var formattedNameDegree = formattedName + formattedDegree;

            $(".education-entry:last").append(formattedNameDegree);

            var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
            $(".education-entry:last").append(formattedDates);

            var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
            $(".education-entry:last").append(formattedLocation);

            var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[0]);
            $(".education-entry:last").append(formattedMajor);

            }

        $("#education").append(HTMLonlineClasses);

        for (course in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);

            var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title).replace("#",education.onlineCourses[course].url);;
            var formattedSchool= HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);

            var formattedTitleSchool = formattedTitle + formattedSchool;
            $(".education-entry:last").append(formattedTitleSchool);

            var formattedOnlineDates= HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedOnlineURL= HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
            $(".education-entry:last").append(formattedOnlineURL);

            }

    }

}


var work = {
    "jobs": [
    {
        "employer": "Pied Piper",
        "title": "Chief Evangelism Officer",
        "location": "Palo Alto",
        "dates": "2016 - Current",
        "description": "A middle-out compression solution making data storage problems smaller.  The Pied Piper team has managed to achieve an 88% reduction in file size for JPEG images without any notable loss in image quality and a 67% reduction in video files."
    },
    {
        "employer": "Bachmanity Capital",
        "title": "President",
        "location": "San Francisco",
        "dates": "2016 - 2016",
        "description": "At Bachmanity Capital, more than a 'buck' or two that shall be risked. More hazards than all seven proverbial seas possess will be undertaken. And danger? Oh, danger will most certainly be proceeded in the face of. Right in its face. Right in it. Bachmanity Capital will shortly be offering limited partnerships to discerning investors: Investors who fear not gale nor kraken, and wouldst embark upon the U.S.S. Bachmanity, bound for Cape Innovation."
    }
    ],
    display: function () {
        for (job in work.jobs) {

            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
}


var projects = {
    "projects": [
        {
            "title": "Finding Mona",
            "dates": "2015",
            "description": "Her enigmatic smile has baffled art lovers for centuries - but now the mystery of the Mona Lisa seems to have finally been solved.  Historical experts now agree that I have found the tomb of Leonardo’s model buried under the altar of a derelict Florence convent.",
            "images": ["https://bl.ocks.org/mbostock/raw/ca5b03a33affa4160321/11bf2679cece248fdb8221aa9a33a6d9b624e9e5/thumbnail.png",
                       "https://bl.ocks.org/mbostock/raw/0d20834e3d5a46138752f86b9b79727e/dd3a762e4a1df0e2eaeed4f3232bcdd9935def15/thumbnail.png"
                      ]
        },
        {
            "title": "Arrows of Time",
            "dates": "2014",
            "description": "Physicists have long puzzled over the fact that two distinct 'arrows of time' both point in the same direction. In the everyday world, things wear out -- cups fall from tables and break, but broken cups never re- assemble themselves spontaneously. In the expanding Universe at large, the future is thought to be the direction of time in which galaxies are further apart.  No longer.",
            "images": ["https://bl.ocks.org/mbostock/raw/c677b9bb3c926ba13f3a902acb006b0c/420dadd5408a85f8f3694e403a2b57cecd6756f3/thumbnail.png",
                       "https://bl.ocks.org/mbostock/raw/87fbdfc4533df2ffa02b5bb62bfb5cb6/6daad1a0aa7e80102a3e2cf0e7987ae55018e6fe/thumbnail.png"
                      ]
        }
    ],
    display: function() {
        for (project in this.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%",this.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%",this.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%",this.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            if (this.projects[project].images.length > 0) {

                for (image in this.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%",this.projects[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }

            }

        }

    }

}

var bioName = HTMLheaderName.replace("%data%", bio.name);


function objectLoopReplaceAppend(objectParam, selector, htmlSnippet, keyToReplace, valueToReplace) {
    for(key in objectParam) {
        //console.log('new here');
        //console.log(key + '...' + objectParam[key]);
        $(selector).append(htmlSnippet.replace(keyToReplace, key).replace(valueToReplace, objectParam[key]));
    };
}


function arrayLoopReplaceAppend(arrayParam, selector, htmlSnippet, textToReplace) {
   //console.log(arrayParam);
   //console.log(htmlSnippet);
   //console.log(selector);
   arrayParam.forEach(function(entry) {
        $(selector).append(htmlSnippet.replace(textToReplace, entry));
   });
}

/*
OLD, DELETE BEFORE SUBMIT
for(key in bio.contacts) {
    console.log(key + '...' + bio.contacts[key]);
    $("#topContacts").append(HTMLcontactGeneric.replace("%contact%", key).replace("%data%", bio.contacts[key]));
};
*/

objectLoopReplaceAppend(bio.contacts, "#topContacts", HTMLcontactGeneric, "%contact%", "%data%");

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(bioName);
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

/*
OLD, DELETE BEFORE SUBMIT
bio.skills.forEach(function(entry) {
    console.log(entry);
    $("#header").append(HTMLskills.replace("%data%", entry));
});
*/


if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);
    arrayLoopReplaceAppend(bio.skills, "#header", HTMLskills, "%data%");

}

/*
function displayWork() {
    for (job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

*/

work.display();

/*
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});
*/


/*
projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }

    }
}
*/
projects.display();

education.display();
