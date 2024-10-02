/* 
* Here we write on single function to handle the Roll Die button
*
 */

function rollDie()
{
    const numberofDie = document.getElementById("die").value;     // Get the value of the input 
    const dieresult = document.getElementById("faces");           // hold the result of the randam number generated after clicking the button
    const imageresult = document.getElementById("imgs");          // Hold the corresponding imgages based on the random number generated

    const values = [];
    const images = [];

    for (let i = 0; i < numberofDie; i++) {
        const element = Math.floor(Math.random()*6)+1;     // generate 6 random numbres and round them
        values.push(element);                              // push the values to the values arrays
        images.push(`<img src=images/${element}.png  alt = "Dice ${element}" >`);  // push the values to images array based on the corresponding images in the images folder
    }
    if (numberofDie>=1) {
        dieresult.textContent = `Dice: ${values.join(` ; `)}`;       // if the number of die is greater or equal to 1, we display the generated random numbers and their corresponding images.
        imageresult.innerHTML = images.join(` `);
    }
    else
    {
        dieresult.textContent = "please input the number of Die";  
    }
   


}