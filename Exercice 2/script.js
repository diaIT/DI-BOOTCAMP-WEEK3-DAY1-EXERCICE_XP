//Add the code above, to your HTML file

//Add a “light blue” background color and some padding to the <div>.
let divUser = document.querySelector("div");
divUser.setAttribute('style', "background:lightblue")
divUser.style.padding="20px"

//Do not display the <li> that contains the text node “John”.
let John= document.querySelector("li");
    John.style.display="none";

//Add a border to the <li> that contains the text node “Pete”.
let Pete = document.querySelectorAll("li")[1];
    Pete.style.border = "2px solid black" 

//Change the font size of the whole body.
let fbody = document.querySelector("body")
    fbody.style.fontSize= "30px"

//Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
if(divUser==="lightblue"){
    console.log("this is lightblue")
    alert("hello",)
}
