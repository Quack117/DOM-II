// Your code goes here

 let navLinks = document.querySelectorAll(".nav-link")
 
 console.log(navLinks);

navLinks[0].addEventListener("keydown", function(event) {
	event.target.style.color = "yellow";
})

navLinks[1].addEventListener("keydown", function(event) {
	event.target.style.color = "yellow";
})
navLinks[2].addEventListener("keydown", function(event) {
	event.target.style.color = "yellow";
})
navLinks[3].addEventListener("keydown", function(event) {
	event.target.style.color = "yellow";
})

navLinks[0].addEventListener("keyup", function(event) {
	event.target.style.color = "orange";
})

navLinks[1].addEventListener("keyup", function(event) {
	event.target.style.color = "orange";
})
navLinks[2].addEventListener("keyup", function(event) {
	event.target.style.color = "orange";
})
navLinks[3].addEventListener("keyup", function(event) {
	event.target.style.color = "orange";
})

let funBusLogo = document.querySelector("h1")

funBusLogo.addEventListener("mouseover", function(event) {
	event.target.style.color = "red"
})

funBusLogo.addEventListener("wheel", function(event) {
	event.target.style.display = "none"
})

let headerSelector = document.querySelectorAll(".intro")

console.log(headerSelector)


headerSelector[0].children[0].addEventListener("click", function(event){
	event.target.style.display = "none"
})

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
	alert("Congratz! You didn't win a prize!")
});

headerSelector[0].children[1].addEventListener("mousedown", function(event){
	event.target.style.fontSize = "10rem"
})
headerSelector[0].children[2].addEventListener("mouseup", function(event){
	event.target.style.fontSize = "3rem"
})

let buttonSelector = document.querySelectorAll(".btn")

buttonSelector[0].addEventListener("mouseenter", function(event){
	event.target.style.color = "red"
})

let bodySelector = document.querySelector("body")

bodySelector.addEventListener("click", function(event){
	console.log("Something has been clicked.")
})

let mainNavigationSelector = document.querySelector(".main-navigation")

mainNavigationSelector.addEventListener("click")