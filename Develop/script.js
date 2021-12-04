var date = document.getElementById('currentDay')

var currentDate = new Date ();

$('div').click(function(){
  var prev=$(this).html();
  $(this).html($(this).data('prev'));
  $(this).data('prev',prev)
  console.log($(this).data('prev'))
  })
$("#modalDueDate").datapicker();


$(".card .list-group").sortable({
    connectWith: $(".card .list-group"),
    scroll: false,
    tolerance: "pointer",
    helper: "clone",
    activate: function(event) {
      console.log("activate", this);
    },
    deactivate: function(event) {
      console.log("deactivate", this);
    },
    over: function(event) {
      console.log("over", event.target);
    },
    out: function(event) {
      console.log("out", event.target);
    },
    update: function(event) {
      console.log("update", this);
    }});

    $(".slot").click({
  connectWith: $(".slot"),
  scroll: false,
  tolerance: "pointer",
  helper:"clone",
  activate: function(event) {
    console.log("activate", this)
  }
})