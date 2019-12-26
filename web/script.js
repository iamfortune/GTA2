var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function() {
    if (input.value.length > 0) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    }
})


button.addEventListener("click", function() {
    if(input.value.length > 0) {
        var li = document.create 
    }
})

input.addEventListener("keypress", function(event) {
    if (input.value.length > 0 && event.keyCode === 13) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    }
})


//please look at this for me, is there a way i can append 
// a date to every new "li" element that is created
//please help me 

input.addEventListener("keypress", function(event) {
    var date = document.createTextNode(date),
    li = document.getElementsByClassName("date");
    li.appendChild(date);

//    li.appendChild(document.createTextNode)
})