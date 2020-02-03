let val;

val = document; // entire document
val = document.all; // will return all collections of tags
val = document.all[2]; // return specific items 
val = document.all.length; // total elements in DOM
val = document.head; 
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType; 

val = document.forms;   // will get all the forms on page
val = document.forms[0]; 
val = document.forms[0].id; 
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts; // turn to Array

let scriptsArr = Array.from(scripts); // this will turn to Array

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);