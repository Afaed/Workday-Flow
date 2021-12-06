//using moment to get the current time
currentTime = moment();
//connected it to the current day spot in the html
currentDayEl = document.querySelector("#currentDay");
var displayDate = currentTime.format('MMMM Do YYYY');
//backticks are a way of adding dynamic things into a string when used with a dollar sign


currentDayEl.innerText = displayDate

var timeBlockEl = document.querySelectorAll(".time-block");

var checkTime = function (currentEl) {
    var timeBlock = moment().hour(parseInt(currentEl.id.replace("text", "")))
    console.log(timeBlock)
    
    if (timeBlock.hour() < currentTime.hour()) {
        return "past"
    }
    if (timeBlock.hour() > currentTime.hour()) {
        return "future"
    }
    if (timeBlock.hour() === currentTime.hour()) {
        return "present"
    }
}

for (i = 0; i <= timeBlockEl.length - 1; i++) {
    timeBlockEl[i].className = timeBlockEl[i].className + " " + checkTime(timeBlockEl[i])
}


var onSave = function (event) {

    var hourOfDay = event.target.value
    var contentOfTextFieldForTimeSlot = document.querySelector(`#text${hourOfDay}`).value.trim()
    
    console.log(hourOfDay)
    localStorage.setItem(hourOfDay, contentOfTextFieldForTimeSlot)
}

$(".saveBtn").click(onSave)

var eventArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]



for (var key of eventArray) {

    var eventText = localStorage.getItem(`${key}`)
    if (eventText) {
        $(`#text${key}`).val(eventText)
    }

}
