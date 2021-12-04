var timeContainer = document.getElementsByClassName("timeblocks");

function date (date) {
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("currentDay").innerHTML = "date"
return date
}

function present() {
  if (moment().isAfter(time)) {
    $(taskEl).addClass("list-group-item-danger");
  } 
  else if (Math.abs(moment().diff(time, "days")) <= 2) {
    $(taskEl).addClass("list-group-item-warning");
  
  } else (days)

}
if (moment().isAfter(time)) {
  $(taskEl).addClass("list-group-item-danger");
} 
else if (Math.abs(moment().diff(time, "days")) <= 2) {
  $(taskEl).addClass("list-group-item-warning");
}

$("div").click(function () {
  var prev = $(this).html();
  $(this).html($(this).data("prev"));
  $(this).data("prev", prev);
  console.log($(this).data("prev"));
for(i = 0; i<=div.length; i++)

;});

console.log(tempArr);
$(".card .list-group").sortable({
  connectWith: $(".card .list-group"),
  scroll: false,
  tolerance: "pointer",
  helper: "clone",
  activate: function (event) {
    console.log("activate", this);
  },
  deactivate: function (event) {
    console.log("deactivate", this);
  },
  over: function (event) {
    console.log("over", event.target);
  },
  out: function (event) {
    console.log("out", event.target);
  },
  update: function (event) {
    console.log("update", this);
  }
});
for (let i = 0; i < 10; i++){
$(".slot").click({
  connectWith: $(".slot"),
  scroll: false,
  tolerance: "pointer",
  helper: "clone",
  activate: function (event) {
    console.log("activate", this);
  }
  }
);};

for (let i = 0; i < 20; i++){
$(".timeBlocks")(`   <div class="col-2 border border-dark">
<p>1/3 Timeblocks here</p>
</div>
<div class="col-8 border border-primary">
<input placeholder="2 of 3 - type here" ></input>
</div>
<div class="col-2 border border-success">
<p>3/3 save button here</p>
</div>
</div>`)};