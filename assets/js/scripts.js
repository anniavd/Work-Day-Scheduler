
///  localstorage

var tasks = {};

var loadsT= function(){
  var tasks = localStorage.getItem("tasks")
   if (tasks) {
      tasks = JSON.parse(tasks)
    }
  else {
    tasks = {};
  }  
}




$('.saveBtn').on('click', function (event) {
    event.preventDefault();

   var timeTask=$('#id');
   var taskL= $('.description')
  tasks={
      timeTask,
      var taskL
  };

});


//save task in localStorage

var saveTasks = function() {
   // localStorage.setItem(('hour', JSON.stringify(tasks))
};


// showinfo()
// showcolors() if hour < current addClass past

// onclick saveBtn


// {09:"coffed",12:"lunch"}   taks[hourBTN]= input del textare