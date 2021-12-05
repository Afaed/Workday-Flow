//using moment to get the current time
currentTime = moment();
//connected it to the current day spot in the html
currentDayEl = document.querySelector("#currentDay");
var displayDate = currentTime.format('MMMM Do YYYY');
//backticks are a way of adding dynamic things into a string when used with a dollar sign


currentDayEl.innerText = displayDate

var timeBlockEl = document.querySelectorAll(".time-block");

var checkTime = function (currentEl) {
    var timeBlock = moment().hour(parseInt(currentEl.id))
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

for (i = 0; i <= timeBlockEl.length - 1; i++) {
    timeBlockEl[i].className = timeBlockEl[i].className + " " + checkTime(timeBlockEl[i])
}}


var onSave = function (event) {

    if (document.querySelector(`#btn${event.target.value}`).value) {
        
        var timeBlockEvent = document.querySelector(`#btn${event.target.value}`).value

        localStorage.setItem(`${event.target.value}`, timeBlockEvent.trim())
    }
   
}

$(".saveBtn").click(onSave)

var eventArray = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]



for (var key of eventArray) {

    var eventText = localStorage.getItem(`${key}`)
    if (eventText) {
        $(`#btn${key}`).val(eventText)
    }

}
