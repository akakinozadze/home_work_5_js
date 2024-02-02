"use strict";

//! 1 //

// let link = "https://google.com";

// function

//! 2 //

// let newElement = document.createElement("img");
// newElement.classList.add("wraper");
// document.getElementById("box1").appendChild(newElement);
// newElement.setAttribute(
//   "src",
//   "https://i0.wp.com/www.trafalgar.com/real-word/wp-content/uploads/sites/3/2020/01/lisbon-portugal-skyline-JHVLYKP.jpg?fit=1214%2C810&ssl=1"
// );
// newElement.setAttribute("alt", "image.oldest.country");
// let newElement2 = document.createElement("h2");
// document.getElementById("box1").appendChild(newElement2);
// newElement2.classList.add("title");
// newElement2.textContent="image title ";
// newElement2.style.color = "red";
// newElement2.style.fontSize = "30px";

// //! 3 //

// let newElement3 = document.querySelectorAll(".box2");

// newElement3.forEach(function(item){
//     let element1 = document.createElement("p");
//     element1.classList.add("text2");
//     element1.textContent = "hello";

//     item.appendChild(element1);
// })

//! 4 //

// let array6 = [-1, -2, -3, 4].some(function (numbers) {
//   return numbers > 0;
// });
// console.log(array6);


//! 5 // 

let array6 = "12345"
.split ("")
.reduce(function(sum,numbers){
    return sum + Number(numbers);
},0);
console.log(array6);


