///  localstorage

var tasks= localStorage.getItem("tasks") 
if(tasks){
    tasks = JSON.parse(tasks)
} 
else{
    tasks={}
}

// showinfo()
// showcolors() if hour < current addClass past

// onclick saveBtn


// {09:"coffed",12:"lunch"}   taks[hourBTN]= input del textare