const myAge = 18;
const isFemale = true;
const driverStatus = 'bob';

/*
let age = 16; 
let isFemale = false;
let driverStatus = 'Johnson'; 
*/

/* 
Previous code
if (age >= 18) {
    console.log('Come inside and have a drink!');
} else {
    console.log('Sorry, you are too young to enter');
}
*/

if (myAge >= 18) {
    console.log('You get a 50% discount');
} else {
    console.log('You have to pay the full amount');
}

if (isFemale) {
   console.log('You can purchase a ticket');
} else {
    console.log('Sorry, but tonight is ladies night');
}

if (driverStatus === 'bob') {
    console.log('You can drive');
} else {
    console.log('You had too much to drink. Let us call a taxi');
}
