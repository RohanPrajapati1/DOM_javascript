// // access by using id
// const box = document.getElementById('box-3');
// console.log(box);

// // Access by using tegName
// const tags = document.getElementsByTagName('div');
// console.log(tags);
// const paragraph = document.getElementsByTagName('p');
// console.log(paragraph);

// // access by using class name
// const boxes = document.getElementsByClassName('box');
// console.log(boxes);

// // Access by using query selector
// const box2 = document.querySelector('.container #box-2'); // it select box inside container whose id is box-2
// console.log(box2);
// const boxs = document.querySelectorAll('.container .box');
// console.log(boxs);



// Modify selected element

// 1. innerHtml => means modify content inside element
const box1 = document.getElementById('box-1');
box1.innerHTML = "<h1>Hello</h1>";

// 2. changing attributes
box1.style.backgroundColor = "gray"
// box1.img.scr = "";

// 3. changing class 
const boxes = document.getElementsByClassName('box');

for(let i=0; i<boxes.length; i++){
    boxes[i].classList.add('round-border');
}
box1.classList.remove('round-border');


// creating new element

const newP = document.createElement('p');
newP.innerText = "This is new paragraph";

const container = document.getElementById('container');
container.appendChild(newP);
