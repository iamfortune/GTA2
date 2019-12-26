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


//me trying to copy the above but in this case i want to 
//create date as the user inputs a button, need
//to search which kind of node, a date contains
//find a way to add delete as an icon without putting the 
//html markup for delete.
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