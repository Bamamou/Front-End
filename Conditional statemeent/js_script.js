const result = document.getElementById("data");
const submit = document.getElementById("submitbtn");
const text   = document.getElementById("mytest");
let age

submit.onclick = function()
{
    age = result.value;
    age =Number(age);
    if (0<age && age<18) {
        text.textContent = "You are too young to log in";
    }
    else if (age<100 && age>18) {
        text.textContent = "Welcome to Wemo";
    }
    else if (age>100) {
        text.textContent = "You are too old to log in";
    }
    else if (age == 0) {
        text.textContent = "You were just born and you are not allowed";
    }
    else{
        text.textContent = "Your age cannot be negative";
    }
}
