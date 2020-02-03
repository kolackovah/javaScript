// document.getElementsByClassName
//-------------------------------------

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);
//------------------------------------------------------------------------------------

// document.getElementsByTagName   // same things as getElementByClassName
//-------------------------------------------------------------------------
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Conver HTML Collection into array
//------------------------------------------------
// lis = Array.from(lis);

// lis.reverse(); // method -  we have to convert HTML collection into the array
//----------------------------------------------------------------------------------

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`; // templet string
// });

// console.log(lis);

// document.querySelectorAll  //return node list
//-----------------------------------------------------------
const items = document.querySelectorAll('ul.collection li.collection-item'); // we can put anything in here 

//converting didnt need to convert to node list as because it is mulltiple selectors
items.forEach(function(item, index){  
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

//FOR LOOP it is the same as forEach
//--------------------------------------

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}


console.log(items);
