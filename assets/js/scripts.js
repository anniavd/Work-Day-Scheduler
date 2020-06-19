
///  localstorage

var tasks = [];

var loadsT= function(){
  var tasks = localStorage.getItem("tasks")
   if (tasks) {
      tasks = JSON.parse(tasks)
    }
  else {
    tasks = [];
  }  
}


$('.saveBtn').on('click', function (event) {
    event.preventDefault();
    var node = $(this).prev()[0];
    var timeTask = node.id
    var taskDescription = node.value.trim();
    
    task = {};
    task[timeTask] = taskDescription
    
    console.log(task)
    tasks.push(task);
    saveTasks();
 });


//save task in localStorage

var saveTasks = function() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};




// showinfo()
// showcolors() if hour < current addClass past

// onclick saveBtn


// {09:"coffed",12:"lunch"}   taks[hourBTN]= input del textare