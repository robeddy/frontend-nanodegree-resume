var bio = {
    'name': 'Erlich Bachman',
    'role': 'Chief Evangelism Officer',
    'contacts': {
        'mobile': '650-GOAVIATO',
        'email': 'bachmanity@aviato.com',
        'github': 'aviato_bachman',
        'twitter': 'erlichbachman',
        'location': 'Palo Alto, CA'
    },
    'welcomeMessage':'I memorized the hexadecimal times tables when I was 14 writing machine code, okay? Ask me what 9 times F is. It\'s fleventyfive.',
    'skills': [
        'Entrepreneur','Angel Investor','Incubator Owner','Founder','Chairman'
    ],
    'biopic': 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/6/005/05a/24b/00dd9b4.jpg',
    display: function() {
        var bioName = HTMLheaderName.replace('%data%', bio.name);

        function objectLoopReplaceAppend(objectParam, selector, htmlSnippet, keyToReplace, valueToReplace) {
            for(key in objectParam) {
                //console.log('new here');
                //console.log(key + '...' + objectParam[key]);
                if (objectParam.hasOwnProperty(key)) {
                    $(selector).append(htmlSnippet.replace(keyToReplace, key).replace(valueToReplace, objectParam[key]));
                }
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

        objectLoopReplaceAppend(bio.contacts, '#topContacts', HTMLcontactGeneric, '%contact%', '%data%');
        objectLoopReplaceAppend(bio.contacts, '#footerContacts', HTMLcontactGeneric, '%contact%', '%data%');

        $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
        $('#header').prepend(bioName);
        $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
        $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

        if (bio.skills.length > 0) {

            $('#header').append(HTMLskillsStart);
            arrayLoopReplaceAppend(bio.skills, '#header', HTMLskills, '%data%');

        }
    }

}

var education = {
    'schools': [
        {
            'name': 'University of Wisconsin',
            'location': 'Madison, WI',
            'degree': 'Masters',
            'majors': ['Life','Shop'],
            'dates': '2013',
            'url': 'http://wisconsin.edu'
        },
        {
            'name': 'Oxford',
            'location': 'Oxford, MS',
            'degree': 'Bachelor of Arts',
            'majors': ['Practical Life', 'Art'],
            'dates': '2010',
            'url': 'http://olemiss.edu'
        }
    ],
    'onlineCourses': [
        {
            'title': 'JavaScript',
            'school': 'Udacity',
            'dates': '2016',
            'url': 'http://udacity.com'
        },
        {
            'title': 'Python',
            'school': 'CodeSchool',
            'dates': '2015',
            'url': 'http://codeschool.com'
        }
    ],
    display: function() {

        education.schools.forEach( function(school) {

            $('#education').append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace('%data%',school.name).replace('#',school.url);

            var formattedDegree = HTMLschoolDegree.replace('%data%',school.degree);

            var formattedNameDegree = formattedName + formattedDegree;

            $('.education-entry:last').append(formattedNameDegree);

            var formattedDates = HTMLschoolDates.replace('%data%',school.dates);
            $('.education-entry:last').append(formattedDates);

            var formattedLocation = HTMLschoolLocation.replace('%data%',school.location);
            $('.education-entry:last').append(formattedLocation);

            var formattedMajor = HTMLschoolMajor.replace('%data%',school.majors[0]);
            $('.education-entry:last').append(formattedMajor);

        })

        $('#education').append(HTMLonlineClasses);

        education.onlineCourses.forEach( function(course) {
            $('#education').append(HTMLschoolStart);

            var formattedTitle = HTMLonlineTitle.replace('%data%',course.title).replace('#',course.url);;
            var formattedSchool= HTMLonlineSchool.replace('%data%',course.school);
            var formattedTitleSchool = formattedTitle + formattedSchool;

            var formattedOnlineDates= HTMLonlineDates.replace('%data%',course.dates);

            var formattedOnlineURL= HTMLonlineURL.replace('%data%',course.url);

            $('.education-entry:last').append(formattedTitleSchool, formattedOnlineDates, formattedOnlineURL);

        })

    }

}


var work = {
    'jobs': [
    {
        'employer': 'Pied Piper',
        'title': 'Chief Evangelism Officer',
        'location': 'Palo Alto',
        'dates': '2016 - Current',
        'description': 'A middle-out compression solution making data storage problems smaller.  The Pied Piper team has managed to achieve an 88% reduction in file size for JPEG images without any notable loss in image quality and a 67% reduction in video files.'
    },
    {
        'employer': 'Bachmanity Capital',
        'title': 'President',
        'location': 'San Francisco',
        'dates': '2016 - 2016',
        'description': 'At Bachmanity Capital, more than a \'buck\' or two that shall be risked. More hazards than all seven proverbial seas possess will be undertaken. And danger? Oh, danger will most certainly be proceeded in the face of. Right in its face. Right in it. Bachmanity Capital will shortly be offering limited partnerships to discerning investors: Investors who fear not gale nor kraken, and wouldst embark upon the U.S.S. Bachmanity, bound for Cape Innovation.'
    }
    ],
    display: function () {
        work.jobs.forEach( function(job) {

            $('#workExperience').append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace('%data%',job.employer);
            var formattedTitle = HTMLworkTitle.replace('%data%',job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $('.work-entry:last').append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace('%data%',job.dates);
            $('.work-entry:last').append(formattedDates);

            var formattedLocation = HTMLworkLocation.replace('%data%',job.location);
            $('.work-entry:last').append(formattedLocation);

            var formattedDescription = HTMLworkDescription.replace('%data%',job.description);
            $('.work-entry:last').append(formattedDescription);
        })

    }
}


var projects = {
    'projects': [
        {
            'title': 'Finding Mona',
            'dates': '2015',
            'description': 'Her enigmatic smile has baffled art lovers for centuries - but now the mystery of the Mona Lisa seems to have finally been solved.  Historical experts now agree that I have found the tomb of Leonardo’s model buried under the altar of a derelict Florence convent.',
            'images': ['https://bl.ocks.org/mbostock/raw/ca5b03a33affa4160321/11bf2679cece248fdb8221aa9a33a6d9b624e9e5/thumbnail.png',
                       'https://bl.ocks.org/mbostock/raw/0d20834e3d5a46138752f86b9b79727e/dd3a762e4a1df0e2eaeed4f3232bcdd9935def15/thumbnail.png'
                      ]
        },
        {
            'title': 'Arrows of Time',
            'dates': '2014',
            'description': 'Physicists have long puzzled over the fact that two distinct \'arrows of time\' both point in the same direction. In the everyday world, things wear out -- cups fall from tables and break, but broken cups never re- assemble themselves spontaneously. In the expanding Universe at large, the future is thought to be the direction of time in which galaxies are further apart.  No longer.',
            'images': ['https://bl.ocks.org/mbostock/raw/c677b9bb3c926ba13f3a902acb006b0c/420dadd5408a85f8f3694e403a2b57cecd6756f3/thumbnail.png',
                       'https://bl.ocks.org/mbostock/raw/87fbdfc4533df2ffa02b5bb62bfb5cb6/6daad1a0aa7e80102a3e2cf0e7987ae55018e6fe/thumbnail.png'
                      ]
        }
    ],
    display: function() {

        this.projects.forEach(function(project) {
            $('#projects').append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace('%data%',project.title);
            $('.project-entry:last').append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace('%data%',project.dates);
            $('.project-entry:last').append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace('%data%',project.description);
            $('.project-entry:last').append(formattedDescription);

            if (project.images.length > 0) {

                project.images.forEach(function(image) {
                    var formattedImage = HTMLprojectImage.replace('%data%',image);
                    $('.project-entry:last').append(formattedImage);
                })


            }

        })


    }

}



bio.display();

work.display();

projects.display();

education.display();

$('#mapDiv').append(googleMap);