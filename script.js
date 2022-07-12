var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var time = moment()
$("#currentTime").text(time.format('LTS'));

var hourDisplay = [
    "6AM",
    "7AM",
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM"
  ];
