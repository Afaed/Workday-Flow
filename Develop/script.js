var date = document.getElementById("currentDay");
var timeContainer = document.getElementsByClassName("timeblocks");
var currentDate = new Date();

$("div").click(function () {
  var prev = $(this).html();
  $(this).html($(this).data("prev"));
  $(this).data("prev", prev);
  console.log($(this).data("prev"));
for(i = 0; i<=div.length; i++)

;});

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