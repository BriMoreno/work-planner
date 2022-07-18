//Gets the current date and time to display in the jumbotron
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

var time = moment().format("LTS");
$("#currentTime").html(time);

//function to save user input with the time it was input
