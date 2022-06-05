// put script at the end of body statement
console.log('Hello world');
// html is content and JS is behaviour 

//variable
/*
Rules
1- Can't be a reserved Keyword
2- Should be Meaningful
3- Can't start with a number
4- Can't contain space or (-)
5- Cammel from notation is best for Multiword variables
6- Case sensitive
7- Can declare Multiple variables on a single line and Initialize them  
8- We can assign primitive and Refernce type
-------Primitive/value types = Strings, int, boolean, undefined and NULL-----
*/
// variable is declared as using 'let' keyword
let n = 'Hamid';
let flag = true;
// Constant is declared as const (it doesn't changes it's value if so we get error)
const m = 8;
console.log(m);

// typeof operator gives type of a variable or datatype
console.log(typeof flag);



// Refernce Type
//1-Class Object

let Person = {
    Name: 'Ali', 
    Age : 30
}
// Dot  type access (Default and Easy)
Person.Name = 'Alina'

// Brackets type access 
// used for dynamic selection of properties
let selection = 'Name';
Person[selection] = 'Maria';

//
console.log(Person.Name);


// Arrays or List (It is also type of object)
// it is dynamic
// it can contain different type of data types at same time 
let colors = ['red', 'blue', 'Green'];

// index wise access 
console.log(colors[1]);

// expand
colors[3] = 'sky blue';
colors[4] = 3;

console.log(colors);
// function 

function someBusiness(prams) {
    // some business
    let result = prams * prams;
    return result;
}

let returnedValue = someBusiness(7);
console.log(returnedValue);
