// starting
// tap me function 

const button = document.getElementById("startButton")

button.addEventListener('click', tapMe)

function tapMe() {
 // clear all Texts 
 document.getElementById("startButton").style.display = "none"

 displayInfo()
}

function displayInfo() {

 const mainDiv = document.getElementById("textContainer")
 mainDiv.style.marginTop = "30vh"

 const name = document.getElementById("hello")
 name.innerText = "John Paul Ganzan"
 name.style.fontSize = "3.8em"

 const career = document.getElementById("name")
 career.innerText = "Fullstack Web/Game Developer"


for (var i=1; i<4; i++){
 var g = document.getElementsByClassName("b"+i)
 g[0].style.display = "block"
 g[0].style.zIndex = 1
}
document.getElementById("skillsID").style.display = 'block'
document.getElementById("project").style.display = "block"
document.getElementById("infos").style.display = "block"
}
