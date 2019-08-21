/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. when functions are contained in the global scope, the value of "this" inside of that function will be the window object.
* 2. when dot notation invokes a function.
* 3. when a constructor function is used, "this" refers to the specific object that is created and returned by the constructor function.
* 4. We can explicitly tell the JavaScript engine to point to a certain value using call, apply or bind.
*
* write out a code example of each explanation above
*/

// Principle 1
function greetMe(name) {
  console.log('hello ' + name);
  // console.log(this);
}
greetMe(`Jordan`);
// code example for Window Binding

// Principle 2

 let myImp = {
   name:'Jordans implicit',
   age:22,
   favColor: 'black and blue',
   imp: function(){
     console.log(this.name);
   }
 }
 myImp.imp();
// code example for Implicit Binding

// Principle 3

function Saying(say){
  this.thing = say;
}
let mySaying = new Saying('life is like a box of chocolate');
console.log(mySaying.thing);
// code example for New Binding

// Principle 4
function donated(){
 console.log(this.donated);
}
let donation ={
  name:'lyle',
  donated: 40000,
}
donated.call(donation);
// code example for Explicit Binding