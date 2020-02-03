// FOR LOOP

// for(let i = 0; i < 10; i++){
//   if(i === 2){
//     console.log('2 is my favorite number');
//     continue;
//   }

//   if(i === 5){
//     console.log('Stop the loop');
//     break;
//   }

//   console.log('Number '+ i);
// }

// WHILE LOOP

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// DO WHILE

// let i = 100;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// FOREACH
//---------------------------------------------------------------

// this forEach method will take callback function
// will take 3 things 1. iterator such as car( single name) 2.index , 3.array


//cars.forEach(function(car){
  //console.log(car);
//}  

// cars.forEach(function(car, index, array){
//   console.log(`${index} : ${car}`);
//   console.log(array); // will access the array of the cars
// });

// MAP  - is used to return something different array
//-------------------------------------------------------------

// first create array of objects where i want to return just ids of the users
// thats why I will use map same as forEach


// const users  = [
//   {id: 1, name:'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'},
//   {id: 4, name: 'Steve'}
// ];

// const ids = users.map(function(user){        // will return each id in Array of users
//   return user.id;
// });

// console.log(ids);


// FOR IN LOOP         when i want column and use key value pairs
//-----------------------------------------------------------------
// often use in Objects

const user = {
  firstName: 'John',  // this is the key value pair , x is key = firstName
  lastName: 'Doe',
  age: 40
}

for(let x in user){             // it is FOR and IN       x will return the key   
  console.log(`${x} : ${user[x]}`);  // return key value will put user [x such key]
}