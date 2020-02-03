//COMMENTS
//-------------------------

//single element grab by id or class and it only stores
// one thing

// multiple elements will take all the elemnts in the class
// and return the array of collection


// document.getElementById()   
//-----------------------------

// console.log(document.getElementById('task-title'));
//------------------------------------------------------

// // Get things from the element
//------------------------------------------------------
// console.log(document.getElementById('task-title').id);  
// console.log(document.getElementById('task-title').className);




// // Change styling
//---------------------------------------------------------
document.getElementById('task-title').style.background = '#333';

// const taskTitle = document.getElementById('task-title');  // to declare the vaiable

// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
//------------------------------------------------------------
document.getElementById('task-list').textContent ='Task List';
// const taskTitle = document.getElementById('task-title');  // to declare the vaiable
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()
//-------------------------------------------------------------

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';  // only single selector
document.querySelector('ul li').style.color = 'blue';

// using sudo-classes -  just select just single element
//------------------------------------------------------------------
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';




