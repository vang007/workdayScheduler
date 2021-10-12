var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = today.getMonth()+'-'+(today.getDate())+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

document.getElementById("displayDateTime").innerHTML = daylist[day] + ' <br>   ' + dateTime;


function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}