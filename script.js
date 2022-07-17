//Gets the current date and time to display in the jumbotron
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

var time = moment().format("LTS");
$("#currentTime").html(time);

$(document).ready(function () {
  //listener for saveBtn
  $(".saveBtn").on("click", function () {
      // collects value from adjacent text field and hour the field is for
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      // stores the text to local storage
      localStorage.setItem(time, text);
  })
 
  function timeTracker() {
      //get current number of hours
      var timeNow = moment().hour();

      // loops over each time block
      $(".time-block").each(function () {
          var blockTime = parseInt($(this).attr("id").split("hour")[1]);

          // checks whether each block is in the hour or the past and applies the appropriate background indicator
          if (blockTime < timeNow) {
              $(this).removeClass("future");
              $(this).removeClass("present");
              $(this).addClass("past");
          }
          else if (blockTime === timeNow) {
              $(this).removeClass("past");
              $(this).removeClass("future");
              $(this).addClass("present");
          }
          else {
              $(this).removeClass("present");
              $(this).removeClass("past");
              $(this).addClass("future");

          }
      })
  }

      // retrieves any previously stored data if it exists
      $("#6AM").val(localStorage.getItem("6AM"));
      $("#7AM").val(localStorage.getItem("7AM"));
      $("#8AM").val(localStorage.getItem("8AM"));
      $("#9AM").val(localStorage.getItem("9AM"));
      $("#10AM").val(localStorage.getItem("10AM"));
      $("#11AM").val(localStorage.getItem("11AM"));
      $("#12PM").val(localStorage.getItem("12PM"));
      $("#1PM").val(localStorage.getItem("1PM"));
      $("#2PM").val(localStorage.getItem("2PM"));
      $("#3PM").val(localStorage.getItem("3PM"));
  
      timeTracker();
  })