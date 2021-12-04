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