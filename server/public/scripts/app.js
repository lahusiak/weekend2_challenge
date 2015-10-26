
var peopleArray = [];

var indexTracker = 0;


$(document).ready(function(){
    $.ajax({
        type : "GET",
        url  : "/data",
        success : function(data) {
            console.log("I'm working!");
            console.log(data);
            peopleArray = data.zeta;
            createCarousel(peopleArray);
            updateIndexPoints(peopleArray);

        }
    })


    $("#tracker").on('click', '#next', nextSlide);

    $("#tracker").on('click', '#prev', prevSlide);

});

function createCarousel(array){
    //creates index points and nav buttons
    $("#tracker").append("<div class='main'></div>");
    var $el = $("#tracker").children().last();
    createNavButtons($el);
    createIndexPoints(array, $el);
}


function createIndexPoints(array, $el){
    //this creates the index buttons for each element in the array
    for (var i = 0; i < array.length; i++){
        $el.append("<div class='index-point' id='index" + i + "'></div>")
    }
}

function createNavButtons(tracker){
    $("#tracker").append("<div id = 'prev' class='nav-button'>Prev</div>");
    $("#tracker").append("<div id = 'next' class='nav-button'>Next</div>");//class use dash, id use camelCase
}

function nextSlide(){
    //used with event listener to move to the next right index point on the DOM
    indexTracker++;
    if(indexTracker== peopleArray.length){
        indexTracker = 0;
    }
    updateIndexPoints();
    console.log("I'm clicked");
}

function prevSlide(){
    //used with event listener to move to the next left index point on the DOM
    indexTracker--;
    if(indexTracker < 0){
        indexTracker = peopleArray.length -1;
    }
    updateIndexPoints();
}

function updateIndexPoints(){
    for(var i=0; i< peopleArray.length; i++){
        $("#index" + i).removeClass("index-point-active");
        if(i == indexTracker){
            $("#index" + i).addClass("index-point-active");
            }
        }
        updateDom();
    }



function updateDom(){
    $("#mainContent").empty();
    for (var i = 0; i < peopleArray.length; i++){
        if (i == indexTracker) {
            $("#mainContent").append("<div class = 'person'>"
                + "<h1>Name: " + peopleArray[i].name + "</h1>"
                + "<h3>Github: " + peopleArray[i].github + "</h3>"
                + "<h3>Shoutout: " + peopleArray[i].shoutout + "</h3>"
                + "</div>");
        }
    }
}

//PROCESS NOTES
//$("#mainContent").append("<div class = 'person'></div>");
//$(".person").text(peopleArray[i].name);
//appendDom(); only puts in the last person in the array;
//$("#mainContent").append(employee);//If I put this here, it will give me each person individually, but it won't remove them.

//function updateMainContent(array){
//       console.log(array);
//
//            $("#mainContent").empty();
//       for(var i=0;i<array.length;i++){
//               var person = array[i];
//               if(i==indexTracker)
//                   $("#mainContent").append("<div class='student'>" +
//                 "<h1>Name: " + person.name + "</h1>" +
//               "<p>Github Repo: " + person.github + "</p>" +
//                       "<p>Shoutout: " + person.shoutout + "</p>" +
//                               "</div>");
//                  }
//           }
//    }

//appends person information from data
//function appendDom(data){
//    var $person = $("#mainContent").children().last();
//    //$("#mainContent").append("<div class = person-container></div>");
//    for (var i = 0; i<peopleArray.length; i++ ) {
//        var profile = ("<div class = 'individual-box'>"
//            + "<p>Name: " + peopleArray[i].name + "</p>"
//            + "<p>Github: " + peopleArray[i].github + "</p>"
//            + "<p>Shoutout: " + peopleArray[i].shoutout + "</p>"
//            + "</div>");
//
//        $("#mainContent").append(profile);
//
//    }
//    //$(.person)hide();
//    //$("#mainContent").append(employee);//why does it only show Zeeshan if I put it here?
//}

