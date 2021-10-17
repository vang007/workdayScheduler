var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = today.getMonth()+'-'+(today.getDate())+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
// var sbmtrslt = getElementById("sbmtrslt");

document.getElementById("displayDateTime").innerHTML = daylist[day] + ' <br>   ' + dateTime;


// save to local storage using setItem Method (borrowed from user stackoverflow)
// localStorage.setItem("rslt", 'testValue')



// document.getElementById("rslt").innerHTML = localStorage.getItem("sbmtrslt");

// Retrieve
// localStorage.setItem(`clickSubmit`, "submit");

// function store(){
//     localStorage.setItem("email", inputEmail.value);
//     }

