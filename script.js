// Var - This is the old way to declare varialbes at least until ES6 came along.
// You are able to declare a variable on one line and then reassign that same variable something else,
// in the order of operations, if you declare it on like 1 then reassign it on like 9, it will take the latter,
// which would be on line 9 see below for example.

var ryanLee = "I am Ryan Lee" //declaring the first version of ryanLee
console.log(ryanLee);

var ryanLee = "I am Silas Lee" //reassigning the 2nd version of ryanLee
console.log(ryanLee);

// if you look carefully on like 6 you will see I created a variable called ryanLee and made it equal to a string.
// I did the same thing on like 9 but changed the string, I printed it and it came out as "I am Silas Lee" because
// it's on the latest line.

// ------------------------------------------------------------------------------------------------------------------

// Let
// variables declared with let can have a global, local or block scope.
// block scope is for variables declared in a block.
// a block in js involves opening adn closing curly braces like so {  }

let number = 50
console.log(number);

let number = 100
console.log(number);

// if you see you can delcare the number as the number 50.
// if you try to reassign it, it doens't work, the only way that works is if you use "var."
// since you have so many variable on a big project, we most likely will try to use let instead of var on most projects.

// ----------------------------------------------------------------------------------------------------------------------


// Const

// variables declared with const are similiar to let in regard to the scope.
// such variables can have a global, local, or block scope.
// basically all this to say that 'const' is a variable that can be declared for instance.

const number = 50;

// const number = 100;

// var - scope (global, local) redeclaration & reassignment (yes and yes) hoisting (yes, with default value)
// let - scope (global, local & block) - redeclaration and reassignment (no and yes) - hoisting (yes without default value)
// const - (global, local & block) - redeclaration 7 reassignment (no and no) - hoisting (yes, without default value)
