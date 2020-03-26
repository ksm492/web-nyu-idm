// An array is a special variable, which can hold more than one value at a time.
// Understanding the difference between let & var: It can be said that a variable declared with var is defined throughout the program (function scoped) as compared to let (which is block scoped). A function can contain many blocks.
// watch later: https://www.youtube.com/watch?v=XgSjoHgy3Rk

let namesArray = ['Kevin','McCoy','Emily','Frederic','Alisha','Ashli','Simon','Ty','Fiona','Prismo','Sammy','Caroline','Francesca','Karl','Esther','Irene','Martin','Yanxin','Katrina','Kiana'];
// ARRAYS START FROM ZERO NOT ONE
// console.log(namesArray[0]);
function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// console.log(Math.random());
// console.log(getRandom(1));
// console.log(getRandom(3));
// Expected output is 0, 1, or 2 (not 3)
let n = getRandom(namesArray.length)
let randomName = namesArray[n];
// console.log(namesArray.length);
// console.log(n);
// console.log(randomName);
let arrayAsString = namesArray.join("🥕");
// console.log(namesArray);
// console.log(arrayAsString);

let sortedNames = namesArray.sort();
console.log(sortedNames);

let text = "";

// text += namesArray[0] + "<br>";
// text += namesArray[1] + "<br>";
// text += namesArray[2] + "<br>";
// text += namesArray[3] + "<br>";
// text += namesArray[4] + "<br>";

for (i=0; i<namesArray.length; i++) {
  text += namesArray[i] + " 🍅 " + "<br>";
}

$("#listNames").html(text);

$('#name').html(namesArray[n]);
$('#names').html(arrayAsString);
