var currHour= moment().format("H")
console.log(currHour)
var currDay = $("#currentDay").text(moment().format("dddd, MMMM Do, h:mm A"));

//Get the stored todos from the time blocks
function showToDos(){
  $("#9").val(localStorage.getItem("9"));
  $("#10").val(localStorage.getItem("10"));
  $("#11").val(localStorage.getItem("11"));
  $("#12").val(localStorage.getItem("12"));
  $("#13").val(localStorage.getItem("13"));
  $("#14").val(localStorage.getItem("14"));
  $("#15").val(localStorage.getItem("15"));
  $("#16").val(localStorage.getItem("16"));
  $("#17").val(localStorage.getItem("17"));
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