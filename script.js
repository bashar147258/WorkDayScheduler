var currHour= 14 //moment().format("H")
var currDay = $("#currentDay").text(moment().format("dddd, MMMM Do, h:mm A"));

//Get the stored todos from the time blocks
function showToDos(){
  $("#9").val(localStorage.getItem("toDos"));
  $("#10").val(localStorage.getItem("toDos"));
  $("#11").val(localStorage.getItem("toDos"));
  $("#12").val(localStorage.getItem("toDos"));
  $("#13").val(localStorage.getItem("toDos"));
  $("#14").val(localStorage.getItem("toDos"));
  $("#15").val(localStorage.getItem("toDos"));
  $("#16").val(localStorage.getItem("toDos"));
  $("#17").val(localStorage.getItem("toDos"));
}

//Save Button
$(".saveBtn").on("click", function(event) {
  event.preventDefault()
  var time = $(this).parent().attr("id");
  var toDo = (($(this).parent()).children("textarea")).val();
  localStorage.setItem(time, toDo);
  
})

//Check current time against time blocks and set appropriate colors
function timeBlocks(){
  $(".time-block").each(function(){
    var blockHour=parseInt($(this).attr("id")) //Returns the ID value

    if (blockHour < currHour){
      $(this).addClass("past").removeClass("present", "future");
    } else if (blockHour > currHour){
      $(this).addClass("future").removeClass("past", "present");
    } else {
      $(this).addClass("present").removeClass("past", "future");
    }
  })
}

showToDos();
timeBlocks();