
function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function() {
    console.log( this.name );
  }
  
  let rabbit = new Rabbit("Ra");
   rabbit=new Rabbit("hi")
  rabbit.sayHi();                        // Rabbit
  Rabbit.prototype.sayHi();              // undefined
 console.log(Object.setPrototypeOf(rabbit,Rabbit)); // undefined
 // rabbit.__proto__.sayHi();