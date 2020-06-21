

//declare the array
var tasks = [];


//loads the tasks
var loadsT = function () {
  //take the value from the local storage for each textarea

  $("#9").val(localStorage.getItem("9"))
  $("#10").val(localStorage.getItem("10"))
  $("#11").val(localStorage.getItem("11"))
  $("#12").val(localStorage.getItem("12"))
  $("#13").val(localStorage.getItem("13"))
  $("#14").val(localStorage.getItem("14"))
  $("#15").val(localStorage.getItem("15"))
  $("#16").val(localStorage.getItem("16"))
  $("#17").val(localStorage.getItem("17"))
  $("#18").val(localStorage.getItem("18"))
  $("#19").val(localStorage.getItem("19"))
  $("#20").val(localStorage.getItem("20"))
  $("#21").val(localStorage.getItem("21"))
  $("#22").val(localStorage.getItem("22"))

}

// listener for click button save 
$('.saveBtn').on('click', function (event) {
  event.preventDefault();
  //taiking the values for each time-block on the textarea
  var node = $(this).prev()[0];
  var timeTask = node.id
  var taskDescription = node.value.trim();

  //create object for save the id and description
  task = {
    tasksid: timeTask,
    tasksdes: taskDescription
  };
 //add the objects to the array
  tasks.push(task);

 //call function  save the tasks
  saveTasks();

});

//save task in localStorage

var saveTasks = function () {
  
    localStorage.setItem(task.tasksid, task.tasksdes);
}

// function for show the current date
var now = moment().format("dddd, MMMM Do");
var dateD = function () {
  //selector for show the date 
  $("#currentDay").text(now);
};



//taking the current hour
var currentTime = moment().hour();

// function change task color 
var colorHour = function () {

  $(".description").each(function () {
    var hourNumber = parseInt($(this).attr("id"));

    //condicional for change color in past, present and future depending the current hour
    if (hourNumber < currentTime) {
      $(this).addClass("past")
    }
    else if (hourNumber === currentTime) {
      $(this).addClass("present")
      $(this).removeClass("past")
    }
    else {
      $(this).addClass("future")
      $(this).removeClass("past")
      $(this).removeClass("present")
    }

  })
}
// call function for change tasks color depending the hour of the day
colorHour();

// call  function for show the current date
dateD();

// call function for loads the tasks
loadsT();






