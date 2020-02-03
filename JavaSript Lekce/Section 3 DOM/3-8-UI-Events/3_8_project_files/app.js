// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

//   //e.preventDefault();
//-------------------------------
// });

//take in click and callback function
// when we run event on click then it will call this callback function

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  //console.log('Clicked');

  //when we click 

  let val;

  val = e;

  // Event target element
  val = e.target;  // where the event happens
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Change the text after click
  e.target.innerText = "Hello"; // after the click text will change

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;  // number px from top window
  val = e.clientX;  // number horizontal

  // Coords event relative to the element
  val = e.offsetY; // reflex on button where user click
  val = e.offsetX;  // this goes from window

  console.log(val);
}