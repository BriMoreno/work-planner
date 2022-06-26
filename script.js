var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var time = moment()
$("#currentTime").text(time.format('LTS'));
