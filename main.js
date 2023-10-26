// let ,const

/*console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');*/

//string, Numbers, Boolean, null , undefined

const name='Sam';
const age= 30;
const rating=4.5;
const x= null;
const y= undefined;
let z;

console.log(typeof x);

//Concatenation
console.log('my name is ' + name + ' and I am '+ age);
console.log(`my name is ${name} and I am ${age}`);

//properties
const s="Hello World"
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));

const st=' technology, computers, code'
console.log(st.split(', '));


//Arrays 
/*are variables that hold multiple values */

const fruits=['apples', 'oranges' , 'pears'];
console.log(fruits);
console.log(fruits[2]);

// to change one value inside the array 

fruits[2]='Grapes'
console.log(fruits);

/*if we do not know thr numbers of the values in
 the array and we want to add one more value we use push*/

 fruits.push('mangos');
 console.log(fruits);

 //if you want to add the item in the begin of the array

 fruits.unshift('strawberries');
 console.log(fruits);

 // to delete the last item
 fruits.pop();
 console.log(fruits);

 // if you want to check if it is array

 console.log(Array.isArray(fruits));
 
//if you want to know the index of value in the array

console.log(fruits.indexOf('oranges'));


// Objects:{ key:value, key:value}

const person= {
    firstName :'Sam',
    lastName :'Doe',
    age :30,
    hobbies:['music', 'movies', 'sports'], // string inside an object
    address:{
        street: 'jupiterstreet',
        city:'Boston',
        state: 'MA' // object insdie an object
    }
}

console.log(person.firstName, person.address.city, person.hobbies[2]);

// if you want to pull something from an object you use

const {firstName, lastName, address:{city}} = person;

console.log(city);

//to add property to the object

person.email = 'reham@gmail.com';
console.log(person);

//objects inside on array

const todos=[
    {
        id:1,
        text:'take out the trash',
        isCompleted: true
    },
    {
        id:2,
        text:'make breakfast',
        isCompleted: true
    },
    {
        id:3,
        text:'Going to gym',
        isCompleted: false
    },
]

console.log(todos[1].text);

/* json structure is same as the example of todos 
the only difference is that keys and strings in json
are with double brackets
json format used to send data to browser server
*/

const todoJson= JSON.stringify(todos); // to convert to Json
console.log(todoJson);

//For Loop

for(let i=0; i<10; i++){
    console.log(`For Loop Number: ${i}`)
}

//While

let i=0;
while(i<10){
    console.log(`For Loop Number: ${i}`);
    i++;
}

//use for loop to see the text of each item in the array todos
for(let i=0; i<todos.length; i++){
    console.log(todos[i].text);
}

// Another way to do it:if I want to go throught the objects in array todos:

for(let todo of todos){
    console.log(todo.id);
}

//forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.id);
});

//map will return an object of todo.text

const todoText= todos.map(function(todo){
    return todo.text;
});

// we need to refer the array to a variable because it uses return not console.log
console.log(todoText);
console.log(typeof todoText);

//filter to specify a uniqe item in array of objects
const todoCompleted= todos.filter(function(todo){
    return todo.isCompleted === true;
});

console.log(todoCompleted);

//you can use both filter and map for example th the same time

const todoComplet= todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoComplet);
 
//condition if
// if x='10' and you used x==10 the output remian true
//if you used x===10 then it will compare the data type of x as well and you will get false

const b='10';
if(b==10){
    console.log('x is 10');
}


// example2:

/*const a=4 ;
if(a==10){
    console.log('x is 10');
} else if(a>10){
    console.log('x is greater than 10');
} else{
    console.log('x is less than 10');
}*/

const a=4;
const c=4;
if(a < 10 || c > 3){
    console.log('x is less than 10 or c is greater than 3');
}

// you can use ? istead of if

const t=10;
const color= t>10 ? 'red' : 'blue'; 
// if t>10 give me red otherwise blue and save the resulte in color
console.log(color);

//switch is another way of contidition like if:

const colour= 'green';
switch(colour){
    case'red': 
    console.log('color is red');
    break;
    case'blue': 
    console.log('color is blue');
    break;
    default: 
    console.log('color is NOT red or blue');
    break;
}


//Functions
function addNum(num1=1 , num2=2){
    return num1 + num2;
}
console.log(addNum(5,5));// call the function

//another way to write the function but as a const

const addNums = (num1= 1 , num2= 1) => num1 + num2;
console.log(addNums(5,4));

todos.forEach((todo) => console.log(todo));

//object oriented
//contructor function
function Person(firstN, lastN, dob){
    this.firstName= firstN;
    this.lastName= lastN;
    this.dob= new Date(dob);}// Date is a fun to show the structure of date

//you can thu creat your own function and recall them :
    /*   this.getBirthYear = function(){
    return this.dob.getFullYear()
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
     }
    */


/*if I do not want to see the function as a property
// of person1 for example, I should put it as a 
// prototype 
then we will replace
 this.getBirthYear = function(){
       return this.dob.getFullYear()
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
     }
with:*/
Person.prototype.getBirthYear=function(){
    return this.dob.getFullYear()
}

Person.prototype.getFullName=function(){
    return `${this.firstName} ${this.lastName}`;
}

//instantiate
const person1= new Person('Sam', 'Saa',' 2-3-1995');
const person2= new Person('Sara', 'Soa',' 2-5-1999');

console.log(person2.getBirthYear());
console.log(person1.getFullName());

//------Classes: it does the same work as function but
// it written in a prettier way :) 
// time of the video 1:10:13

//class
class Human {
    constructor(fName ,lName, dBirth){
        this.firstName= fName;
        this.lastName= lName;
        this.dob= new Date(dBirth);}
       
getBirthYear(){
    return this.dob.getFullYear();
}

getFullName(){
    return `${this.firstName} ${this.lastName}`;
}
}
var human1= new Human('John', 'Saa',' 2-3-1995');
var human2= new Human('Kan', 'Soa',' 2-5-1999');

console.log(human2.getBirthYear());
console.log(human1.getFullName());


//DOM Document object model