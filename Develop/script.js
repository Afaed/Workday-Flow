var timeContainer = document.getElementsByClassName("timeblocks");

var today = document.querySelector("#currentDay");
var currentTime = moment();
today.textContent = currentTime.format("dd, MMM YYYY");

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
let columnsNames = ["col1", "col2", "col3", "col4"];
let rows = [
["col1val1", "09", "26", "1"],
["col1val2", "08", "59", "1"],
["col1val3", "09", "22", "1"]
];


var _rows = [];
var rlen = rows.length;
var clen = columnsNames.length;
for(var i=0;i<rlen;i++){
    var _row = {};
    for(var c=0;c<clen;c++){
        _row[columnsNames[c]] = rows[i][c];
    }
    _rows.push(_row);
}

console.log(_rows);

var col = document.createElement("div");
const col= getElementById(".col")
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