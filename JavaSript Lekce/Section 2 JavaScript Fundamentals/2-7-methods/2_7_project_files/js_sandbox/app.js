const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;  //  same result with two different techniques


// Append
val = 'Brad ';  // put plus sign in front of = to make space
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val =  'That\'s awesome, I can\'t wait';  // have to put \ slash sign

// Length
val = firstName.length; // will count number of characters

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('l'); // will find the letter in string
val = firstName.lastIndexOf('l'); //( will display one, because l is the first)

// charAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1); //minus 1 is always for last character

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3); // is very similar to substring use to pull things from array

// split()
val = str.split(' ');  

// split a string into a array based on separator variable.split(''); 
//if you have a form you have a tags such as web development, programming...
// once submited you can turn these string into sepate arrays.

val = tags.split(','); //we are splitting in by the comma

// replace()
val = str.replace('Hana', 'Jack'); //I will replace something inside the string

// includes()
val = str.includes('foo');  //will give you true/ false value based on if something is string

val = firstName.includes('Hana'); //will return true, bacause Hana is firstName //if string is not same will return false


console.log(val);