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


// Principle 1  //  Window/Global Object Binding //
//1. when functions are contained in the global scope, the value of "this" inside of that function will be the window object.//

function greetMe(name) {
  console.log(`hello  ${name}`);
  console.log(this);
}
greetMe(`Jordan`);




// Principle 2  //  Implicit Binding //
//2. Whenever a function is called by a preceding dot, the object before that dot is this.//

 let myImp = {
   name:'Jordans implicit',
   singleName:'Jordan',
   age:22,
   favColor: 'black and blue!!',
   imp: function(){
     console.log(`${this.name} is soooo good. ${this.singleName} is ${this.age}, and his favorite colors are ${this.favColor}`);
   }
 }
 myImp.imp();



// Principle 3// New binding //
//3. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.//

function CordialPerson(greeting,greeter) {
  this.greeting = greeting;
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const jerry = new CordialPerson('Yo!!','Jordan, its lyle!!');
const newman = new CordialPerson('Ayy!!','Edmin');
const lyle = new CordialPerson('Hey there lyle ', 'do you want a doggy treat?');

jerry.speak();
// newman.speak();
lyle.speak();

// Principle 4 // Explicit binding //
//4. Whenever JavaScript’s call or apply method is used, this is explicitly defined.//

function donated(){
 console.log(this.donated); // grabbed from call(donation)//
}
let donation ={
  name:'lyle',
  donated: 40000,
}
donated.call(donation); // call is grabbing the object from donation and putting it in the "donated()" function so that it can use this.donated without being in the same scope.//
