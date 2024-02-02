"use strict";

//! 1 //

// let link = "https://google.com";

// function

//! 2 //

let newElement = document.createElement("img");
newElement.classList.add("wraper");
document.getElementById("box1").appendChild(newElement);
newElement.setAttribute(
  "src",
  "https://i0.wp.com/www.trafalgar.com/real-word/wp-content/uploads/sites/3/2020/01/lisbon-portugal-skyline-JHVLYKP.jpg?fit=1214%2C810&ssl=1"
);
newElement.setAttribute("alt", "image.oldest.country");
let newElement2 = document.createElement("h2"); 
document.getElementById("box1").appendChild(newElement2);
newElement2.classList.add("title");
newElement2.innerText="image title ";
newElement2.style.color = "red";
newElement2.style.fontSize = "30px";

