//Retrieve the div and console.log 
const container = document.getElementById("container")
console.log(container);

//Change the name “Pete” to “Richard”.
document.querySelector(".list").children[1].textContent = "Richard"

//Change each first name of the two <ul>'s to your name.
let listName = document.querySelectorAll(".list")
    listName.forEach(list=> list.firstElementChild.textContent="Boubacar")

//Delete the <li> that contains the text node “Sarah”.
 listName[1].children[1].remove()

 //Add a class called student_list to both of the <ul>'s.
 listName.forEach(list=> list.classList.add("student_list"))
 
//Add the classes university and attendance to the first <ul>
const firstUl = document.querySelector("ul.list.student_list")
firstUl.classList.add("university","attendance")