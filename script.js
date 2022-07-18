//Gets the current date and time to display in the jumbotron
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

var time = moment().format("LTS");
$("#currentTime").html(time);

//function to save user input with the time it was input
$(document).ready(function(){
    //saves user input to to the hour
    var chara = $(this).siblings(".user-input").val();
    var hours = $(this).parent().attr("id");

    localStorage.setItem(hours,chara);
})

function keepTime() {
    //get present hour
    var now = moment().hour();

    //search for what hour it is presently as well as past and future

    $(".hour-slot").each(function(){
        var slot = parseInt($(this).attr("id").split(hour)[1]);

            //styling for the past slots
            if(slot < now) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            //styling for the future slots
            else if (slot > now) {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
            //styling for present slots
            else {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
    })
}

//fetchs stored data if any