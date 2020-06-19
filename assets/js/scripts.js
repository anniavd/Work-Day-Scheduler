
///  localstorage
var tasks = [];

var tasks = localStorage.getItem("tasks")
if (tasks) {
    tasks = JSON.parse(tasks)
}
else {
    tasks = [];
}



$('.saveBtn').on('click', function (event) {
    event.preventDefault();

    console.log($(this)[0].id)
    var description = $(this).prev()[0].value.trim()

    console.log(description)

    tasks.push(description);
    localStorage.setItem(($(this)[0].id), JSON.stringify(tasks))

});



//save task in localStorage

/* var saveTasks = function() {
   localStorage.setItem("tasks", JSON.stringify(tasks));
};*/


// showinfo()
// showcolors() if hour < current addClass past

// onclick saveBtn


// {09:"coffed",12:"lunch"}   taks[hourBTN]= input del textare