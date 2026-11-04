// 1) Vehicle constructor
function Vehicle(color) {
  this.color = color;
  this.speed = 0;
}

Vehicle.prototype.go = function (speed) {
  this.speed = speed;
  console.log(`now going at speed ${speed}`);
};

Vehicle.prototype.print = function () {
  console.log(`Vehicle color: ${this.color}, current speed: ${this.speed}`);
};

// 2) Plane constructor that extends Vehicle
function Plane(color) {
  Vehicle.call(this, color); // gives Plane the same initial fields as Vehicle
}

// Set Plane.prototype to inherit from Vehicle.prototype
Plane.prototype = Object.create(Vehicle.prototype);
Plane.prototype.constructor = Plane;

// Override go() for Plane
Plane.prototype.go = function (speed) {
  this.speed = speed;
  console.log(`now FLYING at speed ${speed}`);
};

// 3) Create objects, call methods, and verify behavior
const v = new Vehicle('red');
v.go(60);
v.print();

const p = new Plane('green');
p.go(200);
p.print();


const vehicleFunctions = {
  go: function (speed) {
    this.speed = speed;
    console.log(`now going at speed ${speed}`);
  },
  print: function () {
    console.log(`Vehicle color: ${this.color}, current speed: ${this.speed}`);
  }
};

function createVehicle(color) {
  const v = Object.create(vehicleFunctions);
v.color = color;
  return v;
}
const planeProto = Object.create(vehicleFunctions);
planeProto.go = function(speed){
    this.speed = speed;
    console.log('now flying at speed ' + speed);
}
function createPlane(color) {
    const p = createVehicle(color);
    Object.assign(p, planeProto);
    return p;
}

const VehicleProto = {
    constructor: VehicleProto;
}
function Vehicle(color){
    this.color = color;
}
const v3 = new Vehicle('red');
console.dir(Vehicle);
Vehicle.prototype.go = function(speed){
    this.speed = speed;
    console.log('now going at speed ' + speed);
}
Vehicle.prototype.print = function(){
    console.log('Vehicle color: ' + this.color + ', current speed: ' + this.speed);
}
function Plane(color){

}
Plane.prototype = Object.create(Vehicle.prototype);
Plane.prototype.constructor = Plane;
const p1 = new Plane('red');
p1.go(200);
p1.print();

Vehicle.prototype.clone = function(){
    const clone = new Vehicle(this.color);
    clone.speed = this.speed;
    return clone;
}

class Vehicle1{
    speed = 0;
    go(speed){
        this.speed = speed;
        console.log(this.color + 'is now going ' + speed);
    }
    print(){
        console.log(this.color + 'is going ' + this.speed);
    }
    

}
const v4 = new Vehicle1();

v4.print();
v4.go(100);
constructor(color){
    this.color = color;
}
class Plane extends Vehicle1{
    go(speed){
        this.speed = speed;
        console.log(this.color + 'is now flying ' + speed);
    }
}
Vehicle.prototype.numberOfVehicles = 0;
Vehicle.prototype.getNumberOfVehicles = () =>{
Vehicle.prototype.numberOfVehicles++;
}



const organism = {}
const animal = Object.create(organism);
const mamal = Object.create(animal);
const dog = Object.create(mamal);
dog.speek = function(){
    console.log('woof woof');
}

console.log(organism, animal, mamal, dog);

const spot = Object.create(dog);
spot.name = 'Spot';
spot.weight = '100';
spot.color = 'black';
spot.breed = 'labrador';

const fido = Object.create(dog);
fido.name = 'Fido';
fido.weight = '50';
fido.color = 'brown';
fido.breed = 'beagle';
