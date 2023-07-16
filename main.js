// ES6 Symbols in javascript

/*
// Number:1

var Symbol1 = Symbol();

var Symbol2 = Symbol();

console.log(Symbol1);

console.log(Symbol2);

*/

/*
// Number:2 Symbol With Description?

var Symbol1 = Symbol("I am Symbol1");

var Symbol2 = Symbol("I am Symbol2");

console.log(Symbol1);

console.log(Symbol2);

*/

/*
// Number:3 Symbol With Description?

var Symbol1 = Symbol.for("I am Symbol1");

var Symbol2 = Symbol.for("I am Symbol2");

console.log(Symbol1 == Symbol2 );

console.log(Symbol2);

*/

/*
// Number:4 Symbol With Description?

var cricket = Symbol.for("This is cricket symbol");

var object = {

name: "Sakib",

[cricket]: "Bangladesh",

};

console.log(object);

*/

/*
// Number:5 Symbol With Description?

var object = {};

object.name = "JavaScript";

Object.estd = "1995";

object[Symbol("founder")] = "Brendan Eich";

// console.log(object.Keys(object));

console.log(object);

*/

/*

// Number:6 Symbol With Description?

var includes = Symbol ("my own array includes method");

Array.prototype[includes] = () =>{

console.log("This is my array includes function");

};

var myArray = [1,2,3];

console.log(myArray.includes(2));

console.log(myArray["includes"](2));

myArray[includes(2)];
*/


// Number:7 Symbol With Description?

class product {

constructor (title){

this.title = title;

}

// implement search

[Symbol.search] (string) {

return string.indexOf(this.title) >= 0 ? "Found" : "Not Found";

}

}

var laptop = new product ("laptop");

console.log("HP aptop".search(laptop));