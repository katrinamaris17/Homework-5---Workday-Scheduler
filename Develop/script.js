$(document).ready(function (){
$("#currentDay").text(moment().format('MMMM Do YYYY'));


//create an event listener for all "save" buttons
$(".saveBtn").on("click", function() {
    //this calls saveBtn, siblings calls the siblings of saveBtn
    //.val is a method that grabs the value of an element
    //.trim prevents blank spaces before or after information being inputted
let value = $(this).siblings(".description").val().trim(); 
let time = $(this).siblings(".hour").attr("id"); 
console.log(value, time);
//call two variables created and save it to local storage
localStorage.setItem(time, value)
});

//GRAB USER INPUT FROM LOCAL STORAGE EACH TIME BROWSER IS REFRESHED
$("#9").siblings(".description").val(localStorage.getItem("9"));
$("#10").siblings(".description").val(localStorage.getItem("10"));
$("#11").siblings(".description").val(localStorage.getItem("11"));
$("#12").siblings(".description").val(localStorage.getItem("12"));
$("#13").siblings(".description").val(localStorage.getItem("13"));
$("#14").siblings(".description").val(localStorage.getItem("14"));
$("#15").siblings(".description").val(localStorage.getItem("15"));
$("#16").siblings(".description").val(localStorage.getItem("16"));
$("#17").siblings(".description").val(localStorage.getItem("17"));
//Start process for past present future
function timeChecker() {
    const currentHour = moment().hour();
    console.log(currentHour);
    $(".time-block").each(function() {
        const blockHour = parseInt ($(this).children(".hour").attr("id"));
    if (blockHour < currentHour) {
        $(this).addClass("past");    
    }  else if (blockHour === currentHour) {
        $(this).addClass("present");
    }  else if (blockHour > currentHour) {
        $(this).addClass("future");
    }

    });
};
const timeUpdate = setInterval(timeChecker, 5000);
});


