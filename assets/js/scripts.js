
///  localstorage

  var tasks = [];



   var loadsT= function( ){
    
    var tasks =JSON.parse(localStorage.getItem("tasks" ));
    
    console.log("Task: ",tasks);

    if(tasks){
       for(var i=0;i<tasks.length;i++)
       {
       
        $('#' + tasks[i].tasksid).val(tasks[i].tasksdes)
       }
    }
  } 
 



$('.saveBtn').on('click', function (event) {
    event.preventDefault();
    var node = $(this).prev()[0];
    var timeTask = node.id
    var taskDescription = node.value.trim();
    
    task = {  
      tasksid:timeTask,
      tasksdes:taskDescription
    };

    tasks.push(task);

    saveTasks();
    
 });

 

var saveTasks = function() {

  localStorage.setItem('tasks', JSON.stringify(tasks));
 }
 


  var now = moment().format("dddd, MMMM Do YYYY") ;   
  console.log( now);



loadsT();
 

  
  





// showinfo()
// showcolors() if hour < current addClass past

// onclick saveBtn


// {09:"coffed",12:"lunch"}   taks[hourBTN]= input del textare