//using moment to get the current time
currentTime = moment();
//connected it to the current day spot in the html
currentDayEl = document.querySelector("#currentDay");
var displayDate = currentTime.format('MMMM Do YYYY');
//backticks are a way of adding dynamic things into a string when used with a dollar sign


currentDayEl.innerText = displayDate

var timeBlockEl = document.querySelectorAll(".time-block");
console.log(timeBlockEl)

var checkTime = function (currentEl) {
    var timeBlock = moment().hour(parseInt(currentEl.id))
    console.log(timeBlock)
    console.log(currentTime.hour())
    if (timeBlock.hour() < currentTime.hour()) {
        return "past"
    }
    if (timeBlock.hour() > currentTime.hour()) {
        return "future"
    }
    if (timeBlock.hour() === currentTime.hour()) {
        return "present"
    }}
// initial   refers to true to loop      then continue
for (var i = 0; i <= timeBlockEl.length - 1; i++) 

{
    console.log(i)
    timeBlockEl[i].className = timeBlockEl[i].className + " " + checkTime(timeBlockEl[i])
}


var onSave = function (event) {

        var hourofday = event.target.value
        var textfieldfortime = document.querySelector(`#btn${hourofday}`).value
        if (textfieldfortime) {
            localStorage.setItem(`${hourofday}`, textfieldfortime.trim())
        }
}

$(".saveBtn").click(onSave)

var eventArray = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

//in this project, we have tools to make sure they don't lose their info. The purpose of localstarge is to make sure we don't lose it. Thanks save button.

for (var key of eventArray) {

    var eventText = localStorage.getItem(`${key}`)
    if (eventText) {
        $(`#btn${key}`).val(eventText)
    }

}
