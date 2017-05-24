// #javascript fundamentals
//
// - Outline
// - Values, Types, Operators
// -    values, numbers, strings, booleans
//          - strings are immutable. We can access arrays of characters by index
//          - note \ = indicating how something should be interpreted (more later)

//global or local variables - global would be not advised. Instead, use var.

//var glocalvariable = "TODD";
//function mutate(string){
//    string = "bob";
//    console.log(string);
//    console.log(glocalvariable);
//}

//console.log(glocalvariable);

//mutate(glocalvariable);

var x = ";laskjlksjfdjsfpoije";
var boo = true;
console.log(x[3]); // output = s
x[3] = "jk";
console.log(x[3]); // output = s
console.log(!0+ ' '[3]); // output = NaN
var y = null;
console.log("y is: " + y); //output =  y is: null
console.log(1 === "1"); // this will be fale because it's checking for type
console.log(1 =="1"); // this will be true because it's not checking for type
console.log("bob" + 1); //output = bob1

function xyz(value) {
    console.log(value);
    return 6;
}

console.log(xyz("ljkkj"));

// || = or; && = and



// operators - logical, mathematical
//      - ! is a logical value that says to negate logical value, like !0 = not zero
//      - === checking for type and comparison (covered in algorithms chapter 0)
// type conversion/coercion
// Program structure
//  Expression v Statement
//      E produces a value - evaluates down to a value
//      S affects a thing - a statement does a thing  (statements are made of expressions)
//  Variables
//      point at stuff
//  - array: A collection of incformation
//      - arrays are 0 index, so you start counting the first position as the 0 position

var newArray = [1,2,3,4,5,6,7,7];
console.log(newArray[0]); // output = 1
newArray[0] = "bob";
console.log(newArray[0]); // output = bob, because arrays are mutable

var bob = "thisisastring".split('');
console.log(bob);
bob = bob.join('-+-');
console.log(bob);

// objects

var bob = {
    name: "bob",
    age: "42",
    hobby: "painting"
}

console.log(bob);
console.log(bob.name);
console.log(bob.a + "ge");
