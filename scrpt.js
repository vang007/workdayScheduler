var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = today.getMonth()+'-'+(today.getDate())+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;


document.getElementById("displayDateTime").innerHTML = daylist[day] + ' <br>   ' + dateTime;


// local storage variable //

//everytime im working with localstorage i write these functions
//we need to be able to GET the data from localstorage
function getLocalStorage(key) {
    if( localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }
    else {
        return ""
    }
}
// we need to be able to SET the data into localstoarge
function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return;
}

$('.hour-button').on('click', function(e) {
    e.preventDefault();
    console.log($(this));
    let chosenHour = $(this).attr('data-hour');
    console.log(chosenHour)
    //one way to get the text of the associated textarea to this button is to use the data-hour to go to the correct selector hour on textarea

    let text = $(`#input-hour-${chosenHour}`).val().trim();
    console.log(text)

    setLocalStorage(`hour-${chosenHour}`, text);
})
//this funciton will run on page load
function init() {
//whgen page loads, go into local storage and if there is a value for a specific hour, put it in the textarea
for(let i=8; i<18; i++) {
    let storedData = getLocalStorage(`hour-${i}`);
    console.log(storedData)
    let selector = `#input-hour-${i}`;
    console.log(selector)
    $(`#input-hour-${i}`).val(storedData);

}
}

init();