const decreasebtn = document.getElementById("decreasebtn"); // to get acces to the html element
const increasebtn = document.getElementById("increasebtn");
const resetbtn    = document.getElementById("resetbtn");
const countlabel = document.getElementById("countlabel");
let count = 0;  // init a variable of type number
/* 
* This function will keep on incrementing the count variable when clicked
*/
increasebtn.onclick = function()
{
    count++;
    countlabel.textContent = count;
}
/* 
* This function will keep on decrementing the count variable when clicked
*/
decreasebtn.onclick = function()
{
    count--;
    countlabel.textContent = count;
}
/* 
* This function will reset the count variable when clicked
*/
resetbtn.onclick = function()
{
    count =0
    countlabel.textContent = count;
}